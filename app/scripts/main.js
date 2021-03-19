/* eslint-disable no-new */
// NHS.UK frontend components
import MenuToggle from 'nhsuk-frontend/packages/components/header/menuToggle';
import SearchToggle from 'nhsuk-frontend/packages/components/header/searchToggle';
import AutoComplete from './autocomplete/autoCompleteConfig';
import SkipLink from '../../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link';
import Details from '../../node_modules/nhsuk-frontend/packages/components/details/details';
import Checkboxes from '../../node_modules/nhsuk-frontend/packages/components/checkboxes/checkboxes';
import Radios from '../../node_modules/nhsuk-frontend/packages/components/radios/radios';
import Card from '../../node_modules/nhsuk-frontend/packages/components/card/card';
import userFeedbackForm from '@nhsuk/user-feedback-form';

// NHS.UK frontend polyfills
import '../../node_modules/nhsuk-frontend/packages/polyfills';

// NHS digital service manual components
import DesignExample from './design-example';
import {
  inputValue,
  onConfirm,
  source,
  suggestion,
} from './search';

// NHS digital service manual polyfills
import './polyfills';

// Initialise NHS.UK frontend components
document.addEventListener('DOMContentLoaded', () => {
  AutoComplete({
    containerId: 'autocomplete-container',
    formId: 'search',
    inputId: 'search-field',
    onConfirm,
    source,
    templates: {
      inputValue,
      suggestion,
    },
  });
  MenuToggle();
  SearchToggle();
  Details();
  SkipLink();
  Checkboxes();
  Radios();
  Card();

  // NHS digital user feedback form
  if(window.NHSUK_SETTINGS.USER_FEEDBACK_STORE_ENDPOINT && document.querySelector("#nhsuk-user-feedback-form")) {
    userFeedbackForm({
        formEndpoint: window.NHSUK_SETTINGS.USER_FEEDBACK_STORE_ENDPOINT,
        enableTextResponse: false,
    });
  }

  // Design examples
  document.querySelectorAll(DesignExample.selector()).forEach((el) => {
    new DesignExample(el);
  });
});

