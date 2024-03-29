<?php
/**
 * Govpack
 *
 * @package Newspack
 */

namespace Newspack\Govpack;

defined( 'ABSPATH' ) || exit;

define( 'GOVPACK_VERSION', '0.0.1' );

/**
 * Main Govpack Class.
 */
class Govpack {

	/**
	 * Reference to REST API Prefix for consistency.
	 *
	 * @access public
	 * @var string REST API Prefix
	 */
	const REST_PREFIX = 'govpack/v1';

	/**
	 * Stores static instance of class.
	 *
	 * @access protected
	 * @var Govpack\Govpack The single instance of the class
	 */
	protected static $instance = null;

	/**
	 * Returns static instance of class.
	 *
	 * @return self
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Inits the class and registeres the hooks call
	 *
	 * @return self
	 */
	public function __construct() {
		add_action( 'after_setup_theme', [ __class__, 'hooks' ] );
		add_action( 'plugins_loaded', [ '\Newspack\Govpack\ActionScheduler\ActionScheduler', 'hooks' ], 0 );
	
	}

	/**
	 * WordPress Hooks
	 */
	public static function hooks() {

		
		\Newspack\Govpack\CPT\Issue::hooks();
		\Newspack\Govpack\CPT\Profile::hooks();

		//\Newspack\Govpack\Block\Issue::hooks();
		//\Newspack\Govpack\Block\IssueArchive::hooks();
		\Newspack\Govpack\Block\Profile::hooks();

		\Newspack\Govpack\CPT\AsTaxonomy::hooks();

		\Newspack\Govpack\Tax\City::hooks();
		\Newspack\Govpack\Tax\County::hooks();
		\Newspack\Govpack\Tax\Installation::hooks();
		\Newspack\Govpack\Tax\Issue::hooks();
		\Newspack\Govpack\Tax\LegislativeBody::hooks();
		\Newspack\Govpack\Tax\OfficeHolderStatus::hooks();
		\Newspack\Govpack\Tax\Party::hooks();
		\Newspack\Govpack\Tax\Profile::hooks();
		\Newspack\Govpack\Tax\State::hooks();

		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			\Newspack\Govpack\CLI::init();
		}

		\Newspack\Govpack\Importer\Importer::hooks();
		
		
		$menu = new \Newspack\Govpack\Admin\Menu();
		$menu->set_page_title( 'GovPack' )
			->set_menu_title( 'GovPack' )
			->set_menu_slug( 'govpack' )
			->set_callback(
				function() {
				
				}
			);

		$item = new \Newspack\Govpack\Admin\Menu_Item();
		$menu->add_item(
			$item->set_page_title( 'Import' )
				->set_menu_title( 'Import' )
				->set_menu_slug( 'govpack_import' )
				->set_callback( [ '\Newspack\Govpack\Admin\Pages\Import', 'view' ] ) 
		);

		$item = new \Newspack\Govpack\Admin\Menu_Item();
		$menu->add_item(
			$item->set_page_title( 'Profiles' )->set_menu_title( 'Profiles' )->set_menu_slug( 'govpack_profiles' )->set_callback(
				function() {
					
				} 
			) 
		);

		$item = new \Newspack\Govpack\Admin\Menu_Item();
		$menu->add_item(
			$item->set_page_title( 'Issues' )
				->set_menu_title( 'Issues' )
				->set_menu_slug( '/edit.php?post_type=govpack_issues' )
				->set_callback(
					function() {
						
					}
				) 
		);

		$menu->create();
	}

	
}
