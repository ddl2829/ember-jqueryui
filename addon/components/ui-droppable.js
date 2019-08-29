import Ember from 'ember';
import layout from '../templates/components/ui-droppable';
import JqueryUIMethods from '../mixins/jqueryui-methods';

const { on } = Ember;

export default Ember.Component.extend(JqueryUIMethods, {
	attributeBindings: ['data-value', 'droppableStyle:style'],
	'data-value': null,
	layout: layout,

	initializeDroppable: on('didInsertElement', function() {
		const _OPTIONS = ['accept', 'activeClass', 'addClasses', 'disabled', 'greedy', 'hoverClass', 'scope', 'tolerance'];

		let droppableOptions = this._optionCompiler(this, _OPTIONS, this._actionBinders());

		this.$().droppable(droppableOptions);
	}),

	destroyDroppable: on('willDestroyElement', function() {
		this.$().droppable('destroy');
	}),

	_actionBinders() {
		let _self = this;

		return {
			activate: function(event, ui) {
				if (_self.onActivate) {
					_self.onActivate(event, ui, _self);
				}
			},
			deactivate: function(event, ui) {
				if (_self.onDeactivate) {
					_self.onDeactivate(event, ui, _self);
				}
			},
			drop: function(event, ui) {
				if (_self.onDrop) {
					_self.onDrop(event, ui, _self);
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
			}
		};
	}
});
