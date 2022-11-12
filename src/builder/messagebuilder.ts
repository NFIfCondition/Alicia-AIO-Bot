type authorobj = {
    name: string,
    iconurl: URL,
    url: URL,
}

type fieldobj = {
    name: string,
    value: string,
}

type footerobj = {
    text: string,
    iconurl: URL,
}

type embed = {
    color: string,
    title: string,
    url: URL,
    author: authorobj,
    thumbnail: URL,
    fields: fieldobj[],
    timestamp: boolean,
    footer: footerobj,

}
export class MessageBuilder{
    public constructor(args?: {
        embed: embed
    }) {
        if (args){
            Object.assign(this, args)
        }
    }
}

