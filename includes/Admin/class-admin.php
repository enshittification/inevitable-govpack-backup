<?php
/**
 * Govpack
 *
 * @package Newspack
 */

namespace Newspack\Govpack\Admin;

use Exception;

/**
 * GovPack Admin Hooks
 */
class Admin {

    public static function hooks() {
        
        \add_action( 'after_setup_theme', [ __class__, 'create_menus' ], 100, 1 );
        \add_action( 'admin_enqueue_scripts', [ __class__, 'register_assets' ], 100, 1 );
        \add_action( 'admin_enqueue_scripts', [ __class__, 'load_assets' ], 101, 1 );
      
	}

    public static function create_menus(){

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

	

		

		$menu->create();
    }

    public static function register_assets(){

        $file = GOVPACK_PLUGIN_FILE . 'dist/profile_table.asset.php';

		if ( file_exists( $file ) ) {
			$asset_data = require_once $file; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable
		}

        wp_register_style(
			'govpack-profile-table',
			plugin_dir_url( GOVPACK_PLUGIN_FILE ) . 'govpack/dist/profile_table.css',
			//$asset_data['dependencies'] ?? [],
			$asset_data['version'] ?? '',
			true
		);
    }

    public static function load_assets(){
        
        $screen = get_current_screen();
        if("edit-govpack_profiles" === $screen->id){
            \wp_enqueue_style("govpack-profile-table");
        }
    }
}
