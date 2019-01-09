/*
  Copyright (C) 2018 Google Inc.
  Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import {getComponentVM} from '../../../../js_specs/spec_helpers';
import Component from '../relevant-filter';

describe('relevant-filter component', () => {
  let viewModel;

  beforeEach(function () {
    viewModel = getComponentVM(Component);
  });

  describe('menu() method', () => {
    it('returns the list of models sorted by "model_singular" field in ' +
    'alphabetical order', () => {
      const expectedModelNames = ['AccessGroup', 'Assessment',
        'AssessmentTemplate', 'Audit', 'Contract', 'Control', 'DataAsset',
        'Document', 'Evidence', 'Facility', 'Issue', 'Market', 'Metric',
        'Objective', 'OrgGroup', 'Person', 'Policy', 'Process', 'Product',
        'ProductGroup', 'Program', 'Project', 'Regulation', 'Requirement',
        'Risk', 'Standard', 'System', 'TaskGroup', 'TechnologyEnvironment',
        'Threat', 'Vendor', 'Workflow'];

      const models = viewModel.menu();

      models.forEach((model, index) => {
        expect(model.model_singular).toBe(expectedModelNames[index]);
      });
    });
  });
});
