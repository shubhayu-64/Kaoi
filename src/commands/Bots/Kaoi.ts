import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pablo',
            description: 'Displays the info',
            category: 'bots',
            usage: `${client.config.prefix}pablo`,
            baseXp: 200
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `👾 *pablo* 👾\n\n🍀 *Description:* Maintained by Shubhayu Majumdar\n\n🌐 *URL:* https://github.com/shubhayu-64/Pablo-2.0 \n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
