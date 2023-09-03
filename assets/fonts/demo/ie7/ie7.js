/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mastilnitsata\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mastilnitsata-mastilnitsa-handmade-M': '&#xe900;',
		'mastilnitsata-mastilnitsa-handmade': '&#xe901;',
		'mastilnitsata-mastilnitsata-logo-inkpot': '&#xe902;',
		'mastilnitsata-mastilnitsata-brand-inkpot': '&#xe903;',
		'mastilnitsata-new-design-feather': '&#xe990;',
		'mastilnitsata-faq': '&#xe904;',
		'mastilnitsata-mastilnitsata-book': '&#xe905;',
		'mastilnitsata-mastilnitsata-feather-pen': '&#xe906;',
		'mastilnitsata-mastilnitsata-logo': '&#xe907;',
		'mastilnitsata-home3': '&#xe909;',
		'mastilnitsata-pencSelection-43il': '&#xe90a;',
		'mastilnitsata-cart': '&#xe93a;',
		'mastilnitsata-credit-card': '&#xe93f;',
		'mastilnitsata-lifebuoy': '&#xe941;',
		'mastilnitsata-phone': '&#xe942;',
		'mastilnitsata-location2': '&#xe948;',
		'mastilnitsata-printer': '&#xe954;',
		'mastilnitsata-bubble2': '&#xe96e;',
		'mastilnitsata-bubbles3': '&#xe96f;',
		'mastilnitsata-user': '&#xe971;',
		'mastilnitsata-wrench': '&#xe991;',
		'mastilnitsata-equalizer': '&#xe992;',
		'mastilnitsata-download3': '&#xe9c7;',
		'mastilnitsata-upload3': '&#xe9c8;',
		'mastilnitsata-earth': '&#xe9ca;',
		'mastilnitsata-play3': '&#xea1c;',
		'mastilnitsata-pause2': '&#xea1d;',
		'mastilnitsata-stop2': '&#xea1e;',
		'mastilnitsata-backward2': '&#xea1f;',
		'mastilnitsata-forward3': '&#xea20;',
		'mastilnitsata-first': '&#xea21;',
		'mastilnitsata-last': '&#xea22;',
		'mastilnitsata-previous2': '&#xea23;',
		'mastilnitsata-next2': '&#xea24;',
		'mastilnitsata-volume-high': '&#xea26;',
		'mastilnitsata-volume-medium': '&#xea27;',
		'mastilnitsata-volume-low': '&#xea28;',
		'mastilnitsata-volume-mute': '&#xea29;',
		'mastilnitsata-volume-mute2': '&#xea2a;',
		'mastilnitsata-volume-increase': '&#xea2b;',
		'mastilnitsata-volume-decrease': '&#xea2c;',
		'mastilnitsata-mail2': '&#xea84;',
		'mastilnitsata-google2': '&#xea89;',
		'mastilnitsata-facebook2': '&#xea91;',
		'mastilnitsata-instagram': '&#xea92;',
		'mastilnitsata-whatsapp': '&#xea93;',
		'mastilnitsata-youtube': '&#xea9d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mastilnitsata-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
