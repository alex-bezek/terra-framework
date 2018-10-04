import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NotificationDialogSrc from '!raw-loader!../../../../src/NotificationDialog';

// Example Files
import CompleteNotificationDialog from '../example/CompleteNotificationDialog';
import CompleteNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialog.jsx';
import CompleteNotificationDialogWithLongMessage from '../example/CompleteNotificationDialogWithLongMessage';
import CompleteNotificationDialogWithLongMessageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CompleteNotificationDialogWithLongMessage.jsx';
import NoVariantNotificationDialog from '../example/NoVariantNotificationDialog';
import NoVariantNotificationDialogSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NoVariantNotificationDialog.jsx';
import NotificationDialogWithLongText from '../example/NotificationDialogWithLongText';
import NotificationDialogWithLongTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogWithLongText.jsx';
import NotificationDialogOnModalManager from '../example/NotificationDialogOnModalManager';
import NotificationDialogOnModalManagerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NotificationDialogOnModalManager.jsx';
import TransientNotificationDialogExample from '../example/TransientNotificationDialogExample';
import TransientNotificationDialogExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TransientNotificationDialogExample.jsx';

/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Complete Notification Dialog',
        example: <CompleteNotificationDialog />,
        source: CompleteNotificationDialogSrc,
      },
      {
        title: 'Complete Notification Dialog With Long Message',
        example: <CompleteNotificationDialogWithLongMessage />,
        source: CompleteNotificationDialogWithLongMessageSrc,
      },
      {
        title: 'No Variant Notification Dialog',
        example: <NoVariantNotificationDialog />,
        source: NoVariantNotificationDialogSrc,
      },
      {
        title: 'Notification Dialog With Long Text',
        example: <NotificationDialogWithLongText />,
        source: NotificationDialogWithLongTextSrc,
      },
      {
        title: 'Notification Dialog On Modal Manager',
        example: <NotificationDialogOnModalManager />,
        source: NotificationDialogOnModalManagerSrc,
      },
      {
        title: 'Transient Notification Dialog',
        description: 'The TransientNotificationDialog is rendered in a separate React tree that is mounted directly to the <body> element. It will only be closed upon taking interaction with the primary or secondary action buttons. The TransientNotificationDialog can be used as a styled replacement for confirmation dialogs and other use cases that require a workflow to be blocked until user input is detected.',
        example: <TransientNotificationDialogExample />,
        source: TransientNotificationDialogExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Notification Dialog',
        componentSrc: NotificationDialogSrc,
      },
    ]}
  />
);

export default DocPage;
