import React from 'react';

import SuccessMessageComponent from './SuccessMessageComponent';
import EditableWidgetComponent from './EditableWidgetComponent';

export default function SuccessfulListingComponent({
  hostInfo,
  onClose,
  // onEdit,
  onDelete
}) {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <SuccessMessageComponent hostInfo={hostInfo} onClose={onClose} />
        </div>
        <div className="col s12 m8">
          <EditableWidgetComponent
            hostInfo={hostInfo}
            // onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
