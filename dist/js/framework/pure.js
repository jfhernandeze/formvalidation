/*!
 * FormValidation (http://bootstrapvalidator.com)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit frameworks
 *
 * @version     v0.6.0-dev, built on 2014-12-24 10:20:23 PM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://bootstrapvalidator.com/license/
 */
/**
 * This class supports validating Pure framework (http://purecss.io/)
 */
(function($) {
    FormValidation.Framework.Pure = function(element, options) {
        options = $.extend(true, {
            button: {
                selector: '[type="submit"]',
                // The class of disabled button
                // http://purecss.io/buttons/#disabled-buttons
                disabled: 'pure-button-disabled'
            },
            err: {
                clazz: 'fv-help-block',
                parent: '^.*pure-control-group.*$'
            },
            // Pure doesn't support feedback icon
            icon: {
                valid: null,
                invalid: null,
                validating: null,
                feedback: 'fv-control-feedback'
            },
            row: {
                // http://purecss.io/forms/#aligned-form
                selector: '.pure-control-group',
                valid: '',
                invalid: '',
                feedback: 'fv-has-feedback'
            }
        }, options);

        FormValidation.Base.apply(this, [element, options]);
    };

    FormValidation.Framework.Pure.prototype = $.extend({}, FormValidation.Base.prototype, {});
}(jQuery));