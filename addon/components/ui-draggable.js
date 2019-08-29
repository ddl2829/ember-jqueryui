import Ember from 'ember';
import layout from '../templates/components/ui-draggable';
import JqueryUIMethods from '../mixins/jqueryui-methods';

const { on } = Ember;

export default Ember.Component.extend(JqueryUIMethods, {
	attributeBindings: ['data-value'],
	'data-value': null,
	layout: layout,

	initializeDroppable: on('didInsertElement', function() {
		const _OPTIONS = [
			'addClasses',
			'appendTo',
			'axis',
			'cancel',
			'connectToSortable',
			'containment',
			'cursor',
			'cursorAt',
			'delay',
			'disabled',
			'distance',
			'grid',
			'handle',
			'helper',
			'opacity',
			'refreshPositions',
			'revert',
			'revertDuration',
			'scope',
			'scroll',
			'scrollSensitivity',
			'scrollSpeed',
			'snap',
			'snapMode',
			'snapTolerance',
			'stack',
			'zIndex'
		];

		let draggableOptions = this._optionCompiler(this, _OPTIONS, this._actionBinders());

		this.$()
			.draggable(draggableOptions)
			.disableSelection();
	}),

	destroyDroppable: on('willDestroyElement', () => {
		this.$().draggable('destroy');
	}),

	_actionBinders() {
		let _self = this;

		return {
			create(event, ui) {
				if (_self.onCreate) {
					_self.onCreate(event, ui, _self);
				}
			},
			start(event, ui) {
				if (_self.onStart) {
					_self.onStart(event, ui, _self);
				}
			},
			stop(event, ui) {
				if (_self.onStop) {
					_self.onStop(event, ui, _self);
				}
			},
			drag(event, ui) {
				if (_self.onDrag) {
					_self.onDrag(event, ui, _self);
				}
			}
		};
	}
});
