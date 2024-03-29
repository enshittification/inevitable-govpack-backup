<?php
/**
 * Govpack
 *
 * @package Newspack
 */

namespace Newspack\Govpack;

use \Newspack\Govpack\Helpers;

/**
 * Abstract class for registering and handling of custom post types.
 */
abstract class Post_Type {

	/**
	 * WordPress Hooks
	 */
	public static function hooks() {
		add_action( 'init', [ get_called_class(), 'register_post_type' ] );
		add_filter( 'manage_' . static::CPT_SLUG . '_posts_columns', [ __CLASS__, 'manage_columns' ] );
		add_shortcode( static::SHORTCODE, [ get_called_class(), 'shortcode_handler' ] );
		add_filter( 'body_class', [ get_called_class(), 'filter_body_class' ] );
	}

	/**
	 * Adds the post_type to array of supported post types.
	 *
	 * @param array $post_types   Array of post types.
	 *
	 * @return array
	 */
	public static function add_post_type( $post_types ) {
		$post_types[] = static::CPT_SLUG;

		return $post_types;
	}

	/**
	 * Remove tags column from profile admin screen.
	 *
	 * @param string[] $columns The column header labels keyed by column ID.
	 * @return array
	 */
	public static function manage_columns( $columns ) {
		unset( $columns['tags'] );
		return $columns;
	}

	/**
	 * Add body classes depending on layout.
	 *
	 * @param array $classes CSS classes.
	 *
	 * @return array
	 */
	public static function filter_body_class( $classes ) {
		if ( is_singular( static::CPT_SLUG ) ) {
			$classes[] = 'archive';
			$classes[] = 'feature-latest';

			$key = array_search( 'single', $classes, true );
			if ( false !== $key ) {
				unset( $classes[ $key ] );
			}
		}

		return $classes;
	}

}
