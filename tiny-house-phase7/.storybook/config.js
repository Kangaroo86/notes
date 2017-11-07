import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  // Require your stories here...
  require('../src/components/FormComponent.story');
  require('../src/components/UpdateFormComponent.story');
  require('../src/components/WidgetComponent.story');
  require('../src/components/DetailedWidgetComponent.story');
  require('../src/components/EditableWidgetComponent.story');
  require('../src/components/SuccessMessageComponent.story');
  require('../src/components/SuccessfulListingComponent.story');
  require('../src/components/ListingsComponent.story');
  require('../src/components/SortAndFilterComponent.story');
}
configure(loadStories, module);
