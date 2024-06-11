<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shaimali_qds3ivc' );

/** Database username */
define( 'DB_USER', 'shaimali_qds3ivc' );

/** Database password */
define( 'DB_PASSWORD', '8GKu8@@S8p' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mfyl3mazjputy6ms07hei3qnjsaknrx22vxtiiam8oiwnp4o0qlxv2x5kvyvwqda' );
define( 'SECURE_AUTH_KEY',  'm2xnxpkmza7nxem5qjibcqpveqwmbyuylvswpkjvno0fzc6yobvlytiokktmpmxg' );
define( 'LOGGED_IN_KEY',    'rfarcczmzhev2vgla7hytiolvekzymddgluzqp8v11npe2ehcxxzf0uhddr1gbv5' );
define( 'NONCE_KEY',        'zi2qa5cuagyhm23vie7n41vibmfamdoxh3aa8ogbfk9em4ys7t7x80msaktrn8mo' );
define( 'AUTH_SALT',        'ezjsmslucuxhq6fm9zkftwagqbkr8uu6vtgezc6glbvnrei0tsqabbzjln8dgx0e' );
define( 'SECURE_AUTH_SALT', 'jo1xiap17s9nfkigqiylexaifglocbcqrqxvt6lfoj1eio3hpiptbl5phatilgj6' );
define( 'LOGGED_IN_SALT',   'z4jgbweqht9sttsy8ultiicjyapq0l2uma60pl4uzfmlgiqiwirf4xl127zviugy' );
define( 'NONCE_SALT',       'sy2mrslol4weqt3miusnlnaesapwer2b3dzjxgzbrsiigbbbboi188xdapmrvpkn' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* Multisite */
define( 'WP_ALLOW_MULTISITE', '0' );
define( 'MULTISITE', '0' );
define( 'SUBDOMAIN_INSTALL', false );
define( 'DOMAIN_CURRENT_SITE', 'shaimalitlemoeslim.my.id' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
