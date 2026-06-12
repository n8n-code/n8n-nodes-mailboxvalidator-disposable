import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class MailboxvalidatorDisposable implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Mailboxvalidator Disposable',
                name: 'N8nDevMailboxvalidatorDisposable',
                icon: { light: 'file:./mailboxvalidator-disposable.png', dark: 'file:./mailboxvalidator-disposable.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Checks if email is disposable, returns JSON/XML.',
                defaults: { name: 'Mailboxvalidator Disposable' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMailboxvalidatorDisposableApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}
