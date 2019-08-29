import Ember from 'ember';
import layout from '../templates/components/ui-sortable';
import JqueryUIMethods from '../mixins/jqueryui-methods';

const { on } = Ember;

export default Ember.Component.extend(JqueryUIMethods, {
	attributeBindings: ['data-value'],
	'data-value': null,
	layout: layout,

	initializeDroppable: on('didInsertElement', function() {
		const _OPTIONS = [
			'appendTo',
			'axis',
			'cancel',
			'connectWith',
			'containment',
			'cursor',
			'cursorAt',
			'delay',
			'disabled',
			'distance',
			'dropOnEmpty',
			'forceHelperSize',
			'forcePlaceholderSize',
			'grid',
			'handle',
			'helper',
			'items',
			'opacity',
			'placeholder',
			'revert',
			'scroll',
			'scrollSensitivity',
			'scrollSpeed',
			'tolerance',
			'zIndex'
		];

		let sortableOptions = this._optionCompiler(this, _OPTIONS, this._actionBinders());

		this.$().sortable(sortableOptions);
	}),

	tearDown: on('willDestroyElement', function() {
		this.$().sortable('destroy');
	}),

	_actionBinders() {
		let _self = this;

		return {
			activate: function(event, ui) {
				if (_self.onActivate) {
					_self.onActivate(event, ui, _self);
				}
			},
			beforeStop: function(event, ui) {
				if (_self.onBeforeStop) {
					_self.onBeforeStop(event, ui, _self);
				}
			},
			change: function(event, ui) {
				if (_self.onChange) {
					_self.onChange(event, ui, _self);
				}
			},
			create: function(event, ui) {
				if (_self.onCreate) {
					_self.onCreate(event, ui, _self);
				}
			},
			deactivate: function(event, ui) {
				if (_self.onDeactivate) {
					_self.onDeactivate(event, ui, _self);
				}
			},
			out: function(event, ui) {
				if (_self.onOut) {
					_self.onOut(event, ui, _self);
				}
			},
			over: function(event, ui) {
				if (_self.onOver) {
					_self.onOver(event, ui, _self);
				}
			},
			receive: function(event, ui) {
				if (_self.onReceive) {
					_self.onReceive(event, ui, _self);
				}
			},
			remove: function(event, ui) {
				if (_self.onRemove) {
					_self.onRemove(event, ui, _self);
				}
			},
			sort: function(event, ui) {
				if (_self.onSort) {
					_self.onSort(event, ui, _self);
				}
			},
			start: function(event, ui) {
				if (_self.onStart) {
					_self.onStart(event, ui, _self);
				}
			},
			stop: function(event, ui) {
				if (_self.onStop) {
					_self.onStop(event, ui, _self);
				}
			},
			update: function(event, ui) {
				if (_self.onUpdate) {
					_self.onUpdate(event, ui, _self);
				}
			}
		};
	}
});
