import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'guide',
            description: 'Lists All Pablo 2.0 Guides',
            category: 'bots',
            usage: `${client.config.prefix}guide`,
            baseXp: 200
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        let text = ''
        text += '*👾 Pablo 2.0 👾*\n'
        text += '*🔗 README* : https://github.com/shubhayu-64/Pablo-2.0#readme\n'
        text += '*🔗 FEATURES* : https://github.com/shubhayu-64/Pablo-2.0/blob/main/Features.md\n'
        text += '*🔗 CONTRIBUTERS* : https://github.com/shubhayu-64/Pablo-2.0/graphs/contributors\n'
        text += '*🔗 FAQ* : https://github.com/shubhayu-64/Pablo-2.0/blob/main/Troubleshooting%20and%20faq.md\n'
        text += '\n_Thank You for using Pablo 2.0. Help others setup Pablo 2.0 by contribution to Pablo 2.0 Guides_'
        return void M.reply(text).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
