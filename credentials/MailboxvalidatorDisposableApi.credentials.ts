import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MailboxvalidatorDisposableApi implements ICredentialType {
        name = 'N8nDevMailboxvalidatorDisposableApi';

        displayName = 'Mailboxvalidator Disposable API';

        icon: Icon = { light: 'file:../nodes/MailboxvalidatorDisposable/mailboxvalidator-disposable.png', dark: 'file:../nodes/MailboxvalidatorDisposable/mailboxvalidator-disposable.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0',
                        required: true,
                        placeholder: 'https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0',
                        description: 'The base URL of your Mailboxvalidator Disposable API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
