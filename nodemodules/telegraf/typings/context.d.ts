import * as tg from './core/types/typegram';
import * as tt from './telegram-types';
import { Deunionize, PropOr, UnionKeys } from './deunionize';
import ApiClient from './core/network/client';
import Telegram from './telegram';
declare type Tail<T> = T extends [unknown, ...infer U] ? U : never;
declare type Shorthand<FName extends Exclude<keyof Telegram, keyof ApiClient>> = Tail<Parameters<Telegram[FName]>>;
export declare class Context<U extends Deunionize<tg.Update> = tg.Update> {
    readonly update: U;
    readonly tg: Telegram;
    readonly botInfo: tg.UserFromGetMe;
    readonly state: Record<string | symbol, any>;
    constructor(update: U, tg: Telegram, botInfo: tg.UserFromGetMe);
    get updateType(): Extract<UnionKeys<U>, tt.UpdateType>;
    get me(): string;
    get telegram(): Telegram;
    get message(): PropOr<U, "message", undefined>;
    get editedMessage(): PropOr<U, "edited_message", undefined>;
    get inlineQuery(): PropOr<U, "inline_query", undefined>;
    get shippingQuery(): PropOr<U, "shipping_query", undefined>;
    get preCheckoutQuery(): PropOr<U, "pre_checkout_query", undefined>;
    get chosenInlineResult(): PropOr<U, "chosen_inline_result", undefined>;
    get channelPost(): PropOr<U, "channel_post", undefined>;
    get editedChannelPost(): PropOr<U, "edited_channel_post", undefined>;
    get callbackQuery(): PropOr<U, "callback_query", undefined>;
    get poll(): PropOr<U, "poll", undefined>;
    get pollAnswer(): PropOr<U, "poll_answer", undefined>;
    get myChatMember(): PropOr<U, "my_chat_member", undefined>;
    get chatMember(): PropOr<U, "chat_member", undefined>;
    get chatJoinRequest(): tg.ChatJoinRequest | undefined;
    get chat(): Getter<U, 'chat'>;
    get senderChat(): PropOr<GetUpdateContent<U>, "sender_chat", undefined>;
    get from(): PropOr<GetUpdateContent<U>, "from", undefined>;
    get inlineMessageId(): string | undefined;
    get passportData(): tg.PassportData | undefined;
    get webAppData(): {
        data: {
            json<T>(): T;
            text(): string;
        };
        button_text: string;
    } | undefined;
    /**
     * @deprecated use {@link Telegram.webhookReply}
     */
    get webhookReply(): boolean;
    set webhookReply(enable: boolean);
    private assert;
    /**
     * @see https://core.telegram.org/bots/api#answerinlinequery
     */
    answerInlineQuery(this: Context, ...args: Shorthand<'answerInlineQuery'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#answercallbackquery
     */
    answerCbQuery(this: Context, ...args: Shorthand<'answerCbQuery'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#answercallbackquery
     */
    answerGameQuery(this: Context, ...args: Shorthand<'answerGameQuery'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#answershippingquery
     */
    answerShippingQuery(this: Context, ...args: Shorthand<'answerShippingQuery'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#answerprecheckoutquery
     */
    answerPreCheckoutQuery(this: Context, ...args: Shorthand<'answerPreCheckoutQuery'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#editmessagetext
     */
    editMessageText(this: Context, text: string, extra?: tt.ExtraEditMessageText): Promise<true | (tg.Update.Edited & tg.Message.TextMessage)>;
    /**
     * @see https://core.telegram.org/bots/api#editmessagecaption
     */
    editMessageCaption(this: Context, caption: string | undefined, extra?: tt.ExtraEditMessageCaption): Promise<true | (tg.Update.Edited & tg.Message.CaptionableMessage)>;
    /**
     * @see https://core.telegram.org/bots/api#editmessagemedia
     */
    editMessageMedia(this: Context, media: tg.InputMedia, extra?: tt.ExtraEditMessageMedia): Promise<true | (tg.Update.Edited & tg.Message.AnimationMessage) | (tg.Update.Edited & tg.Message.DocumentMessage) | (tg.Update.Edited & tg.Message.AudioMessage) | (tg.Update.Edited & tg.Message.PhotoMessage) | (tg.Update.Edited & tg.Message.VideoMessage)>;
    /**
     * @see https://core.telegram.org/bots/api#editmessagereplymarkup
     */
    editMessageReplyMarkup(this: Context, markup: tg.InlineKeyboardMarkup | undefined): Promise<true | (tg.Update.Edited & tg.Message)>;
    /**
     * @see https://core.telegram.org/bots/api#editmessagelivelocation
     */
    editMessageLiveLocation(this: Context, latitude: number, longitude: number, extra?: tt.ExtraEditMessageLiveLocation): Promise<true | (tg.Update.Edited & tg.Message.LocationMessage)>;
    /**
     * @see https://core.telegram.org/bots/api#stopmessagelivelocation
     */
    stopMessageLiveLocation(this: Context, markup?: tg.InlineKeyboardMarkup): Promise<true | (tg.Update.Edited & tg.Message.LocationMessage)>;
    /**
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    reply(this: Context, ...args: Shorthand<'sendMessage'>): Promise<tg.Message.TextMessage>;
    /**
     * @see https://core.telegram.org/bots/api#getchat
     */
    getChat(this: Context, ...args: Shorthand<'getChat'>): Promise<tg.ChatFromGetChat>;
    /**
     * @see https://core.telegram.org/bots/api#exportchatinvitelink
     */
    exportChatInviteLink(this: Context, ...args: Shorthand<'exportChatInviteLink'>): Promise<string>;
    /**
     * @see https://core.telegram.org/bots/api#createchatinvitelink
     */
    createChatInviteLink(this: Context, ...args: Shorthand<'createChatInviteLink'>): Promise<tg.ChatInviteLink>;
    /**
     * @see https://core.telegram.org/bots/api#editchatinvitelink
     */
    editChatInviteLink(this: Context, ...args: Shorthand<'editChatInviteLink'>): Promise<tg.ChatInviteLink>;
    /**
     * @see https://core.telegram.org/bots/api#revokechatinvitelink
     */
    revokeChatInviteLink(this: Context, ...args: Shorthand<'revokeChatInviteLink'>): Promise<tg.ChatInviteLink>;
    /**
     * @see https://core.telegram.org/bots/api#banchatmember
     */
    banChatMember(this: Context, ...args: Shorthand<'banChatMember'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#banchatmember
     * @deprecated since API 5.3. Use {@link Context.banChatMember}
     */
    get kickChatMember(): (this: Context<tg.Update>, userId: number, untilDate?: number | undefined, extra?: tt.ExtraBanChatMember | undefined) => Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#unbanchatmember
     */
    unbanChatMember(this: Context, ...args: Shorthand<'unbanChatMember'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#restrictchatmember
     */
    restrictChatMember(this: Context, ...args: Shorthand<'restrictChatMember'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#promotechatmember
     */
    promoteChatMember(this: Context, ...args: Shorthand<'promoteChatMember'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
     */
    setChatAdministratorCustomTitle(this: Context, ...args: Shorthand<'setChatAdministratorCustomTitle'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#setchatphoto
     */
    setChatPhoto(this: Context, ...args: Shorthand<'setChatPhoto'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#deletechatphoto
     */
    deleteChatPhoto(this: Context, ...args: Shorthand<'deleteChatPhoto'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#setchattitle
     */
    setChatTitle(this: Context, ...args: Shorthand<'setChatTitle'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#setchatdescription
     */
    setChatDescription(this: Context, ...args: Shorthand<'setChatDescription'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#pinchatmessage
     */
    pinChatMessage(this: Context, ...args: Shorthand<'pinChatMessage'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#unpinchatmessage
     */
    unpinChatMessage(this: Context, ...args: Shorthand<'unpinChatMessage'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#unpinallchatmessages
     */
    unpinAllChatMessages(this: Context, ...args: Shorthand<'unpinAllChatMessages'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#leavechat
     */
    leaveChat(this: Context, ...args: Shorthand<'leaveChat'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#setchatpermissions
     */
    setChatPermissions(this: Context, ...args: Shorthand<'setChatPermissions'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#getchatadministrators
     */
    getChatAdministrators(this: Context, ...args: Shorthand<'getChatAdministrators'>): Promise<tg.ChatMember[]>;
    /**
     * @see https://core.telegram.org/bots/api#getchatmember
     */
    getChatMember(this: Context, ...args: Shorthand<'getChatMember'>): Promise<tg.ChatMember>;
    /**
     * @see https://core.telegram.org/bots/api#getchatmembercount
     */
    getChatMembersCount(this: Context, ...args: Shorthand<'getChatMembersCount'>): Promise<number>;
    /**
     * @see https://core.telegram.org/bots/api#setpassportdataerrors
     */
    setPassportDataErrors(this: Context, errors: readonly tg.PassportElementError[]): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#replywithphoto
     */
    replyWithPhoto(this: Context, ...args: Shorthand<'sendPhoto'>): Promise<tg.Message.PhotoMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithmediagroup
     */
    replyWithMediaGroup(this: Context, ...args: Shorthand<'sendMediaGroup'>): Promise<(tg.Message.DocumentMessage | tg.Message.AudioMessage | tg.Message.PhotoMessage | tg.Message.VideoMessage)[]>;
    /**
     * @see https://core.telegram.org/bots/api#replywithaudio
     */
    replyWithAudio(this: Context, ...args: Shorthand<'sendAudio'>): Promise<tg.Message.AudioMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithdice
     */
    replyWithDice(this: Context, ...args: Shorthand<'sendDice'>): Promise<tg.Message.DiceMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithdocument
     */
    replyWithDocument(this: Context, ...args: Shorthand<'sendDocument'>): Promise<tg.Message.DocumentMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithsticker
     */
    replyWithSticker(this: Context, ...args: Shorthand<'sendSticker'>): Promise<tg.Message.StickerMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithvideo
     */
    replyWithVideo(this: Context, ...args: Shorthand<'sendVideo'>): Promise<tg.Message.VideoMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithanimation
     */
    replyWithAnimation(this: Context, ...args: Shorthand<'sendAnimation'>): Promise<tg.Message.AnimationMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithvideonote
     */
    replyWithVideoNote(this: Context, ...args: Shorthand<'sendVideoNote'>): Promise<tg.Message.VideoNoteMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithinvoice
     */
    replyWithInvoice(this: Context, ...args: Shorthand<'sendInvoice'>): Promise<tg.Message.InvoiceMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithgame
     */
    replyWithGame(this: Context, ...args: Shorthand<'sendGame'>): Promise<tg.Message.GameMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithvoice
     */
    replyWithVoice(this: Context, ...args: Shorthand<'sendVoice'>): Promise<tg.Message.VoiceMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithpoll
     */
    replyWithPoll(this: Context, ...args: Shorthand<'sendPoll'>): Promise<tg.Message.PollMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithquiz
     */
    replyWithQuiz(this: Context, ...args: Shorthand<'sendQuiz'>): Promise<tg.Message.PollMessage>;
    /**
     * @see https://core.telegram.org/bots/api#stoppoll
     */
    stopPoll(this: Context, ...args: Shorthand<'stopPoll'>): Promise<tg.Poll>;
    /**
     * @see https://core.telegram.org/bots/api#replywithchataction
     */
    replyWithChatAction(this: Context, ...args: Shorthand<'sendChatAction'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#replywithlocation
     */
    replyWithLocation(this: Context, ...args: Shorthand<'sendLocation'>): Promise<tg.Message.LocationMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithvenue
     */
    replyWithVenue(this: Context, ...args: Shorthand<'sendVenue'>): Promise<tg.Message.VenueMessage>;
    /**
     * @see https://core.telegram.org/bots/api#replywithcontact
     */
    replyWithContact(this: Context, ...args: Shorthand<'sendContact'>): Promise<tg.Message.ContactMessage>;
    /**
     * @deprecated use {@link Telegram.getStickerSet}
     * @see https://core.telegram.org/bots/api#getstickerset
     */
    getStickerSet(this: Context, setName: string): Promise<tg.StickerSet>;
    /**
     * @see https://core.telegram.org/bots/api#setchatstickerset
     */
    setChatStickerSet(this: Context, setName: string): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#deletechatstickerset
     */
    deleteChatStickerSet(this: Context): Promise<true>;
    /**
     * @deprecated use {@link Telegram.setStickerPositionInSet}
     * @see https://core.telegram.org/bots/api#setstickerpositioninset
     */
    setStickerPositionInSet(this: Context, sticker: string, position: number): Promise<true>;
    /**
     * @deprecated use {@link Telegram.setStickerSetThumb}
     * @see https://core.telegram.org/bots/api#setstickersetthumb
     */
    setStickerSetThumb(this: Context, ...args: Parameters<Telegram['setStickerSetThumb']>): Promise<true>;
    /**
     * @deprecated use {@link Telegram.deleteStickerFromSet}
     * @see https://core.telegram.org/bots/api#deletestickerfromset
     */
    deleteStickerFromSet(this: Context, sticker: string): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#uploadstickerfile
     */
    uploadStickerFile(this: Context, ...args: Shorthand<'uploadStickerFile'>): Promise<tg.File>;
    /**
     * @see https://core.telegram.org/bots/api#createnewstickerset
     */
    createNewStickerSet(this: Context, ...args: Shorthand<'createNewStickerSet'>): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#addstickertoset
     */
    addStickerToSet(this: Context, ...args: Shorthand<'addStickerToSet'>): Promise<true>;
    /**
     * @deprecated use {@link Telegram.getMyCommands}
     * @see https://core.telegram.org/bots/api#getmycommands
     */
    getMyCommands(this: Context): Promise<tg.BotCommand[]>;
    /**
     * @deprecated use {@link Telegram.setMyCommands}
     * @see https://core.telegram.org/bots/api#setmycommands
     */
    setMyCommands(this: Context, commands: readonly tg.BotCommand[]): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    replyWithMarkdown(this: Context, markdown: string, extra?: tt.ExtraReplyMessage): Promise<tg.Message.TextMessage>;
    /**
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    replyWithMarkdownV2(this: Context, markdown: string, extra?: tt.ExtraReplyMessage): Promise<tg.Message.TextMessage>;
    /**
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    replyWithHTML(this: Context, html: string, extra?: tt.ExtraReplyMessage): Promise<tg.Message.TextMessage>;
    /**
     * @see https://core.telegram.org/bots/api#deletemessage
     */
    deleteMessage(this: Context, messageId?: number): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#forwardmessage
     */
    forwardMessage(this: Context, chatId: string | number, extra?: {
        disable_notification?: boolean;
    }): Promise<tg.Message>;
    /**
     * @see https://core.telegram.org/bots/api#copymessage
     */
    copyMessage(this: Context, chatId: string | number, extra?: tt.ExtraCopyMessage): Promise<tg.MessageId>;
    /**
     * @see https://core.telegram.org/bots/api#approvechatjoinrequest
     */
    approveChatJoinRequest(this: Context, userId: number): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#declinechatjoinrequest
     */
    declineChatJoinRequest(this: Context, userId: number): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#banchatsenderchat
     */
    banChatSenderChat(this: Context, senderChatId: number): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#unbanchatsenderchat
     */
    unbanChatSenderChat(this: Context, senderChatId: number): Promise<true>;
    /**
     * Use this method to change the bot's menu button in the current private chat. Returns true on success.
     * @see https://core.telegram.org/bots/api#setchatmenubutton
     */
    setChatMenuButton(this: Context, menuButton?: tg.MenuButton): Promise<true>;
    /**
     * Use this method to get the current value of the bot's menu button in the current private chat. Returns MenuButton on success.
     * @see https://core.telegram.org/bots/api#getchatmenubutton
     */
    getChatMenuButton(): Promise<tg.MenuButton>;
    /**
     * @see https://core.telegram.org/bots/api#setmydefaultadministratorrights
     */
    setMyDefaultAdministratorRights(extra?: Parameters<Telegram['setMyDefaultAdministratorRights']>[0]): Promise<true>;
    /**
     * @see https://core.telegram.org/bots/api#getmydefaultadministratorrights
     */
    getMyDefaultAdministratorRights(extra?: Parameters<Telegram['getMyDefaultAdministratorRights']>[0]): Promise<tg.ChatAdministratorRights>;
}
export default Context;
declare type UpdateTypes<U extends Deunionize<tg.Update>> = Extract<UnionKeys<U>, tt.UpdateType>;
export declare type GetUpdateContent<U extends tg.Update> = U extends tg.Update.CallbackQueryUpdate ? U['callback_query']['message'] : U[UpdateTypes<U>];
declare type Getter<U extends Deunionize<tg.Update>, P extends string> = PropOr<GetUpdateContent<U>, P>;
//# sourceMappingURL=context.d.ts.map