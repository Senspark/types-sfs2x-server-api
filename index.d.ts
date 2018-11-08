// tslint:disable:member-access
// tslint:disable:no-namespace
/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#BanMode
 *
 * The BanMode enum lists all possible user banning modes.
 */
declare enum BanMode {
    /** ban by IP address */
    BY_ADDRESS,

    /** ban by user name */
    BY_NAME,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#ClientDisconnectionReason
 *
 * The ClientDisconnectionReason enum lists all possible disconnection reasons provided by the USER_DISCONNECT event.
 */
declare enum ClientDisconnectionReason {
    IDLE,
    KICK,
    BAN,
    UNKNOWN,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#BoolMatch
 *
 * The BoolMatch enum lists all boolean conditions that can be used in a Match Expression.
 */
declare enum BoolMatch {
    /** the bool1 == bool2 condition */
    EQUALS,

    /** the bool1 != bool2 condition */
    NOT_EQUALS,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#NumberMatch
 *
 * The NumberMatch enum lists all numeric conditions that can be used in a Match Expression.
 */
declare enum NumberMatch {
    EQUALS,
    GREATER_THAN,
    GREATER_THAN_OR_EQUAL_TO,
    LESS_THAN,
    LESS_THAN_OR_EQUAL_TO,
    NOT_EQUALS,
}

declare enum StringMatch {
    CONTAINS,
    ENDS_WITH,
    EQUALS,
    NOT_EQUALS,
    STARTS_WITH,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#InvitationResponse
 *
 * The InvitationResponse enum lists all possible replies to an invitation.
 */
declare enum InvitationResponse {
    ACCEPT,
    REFUSE,
    EXPIRED,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#RoomProperties
 *
 * The RoomProperties object lists all Room properties that can be queried using a Match Expression.
 */
declare enum RoomProperties {
    GROUP_ID,
    HAS_FREE_PLAYER_SLOTS,
    IS_GAME,
    IS_PRIVATE,
    IS_TYPE_SFSGAME,
    MAX_SPECTATORS,
    MAX_USERS,
    NAME,
    SPECTATOR_COUNT,
    USER_COUNT,
}

declare enum UserProperties {
    IS_IN_ANY_ROOM,
    IS_NPC,
    IS_PLAYER,
    IS_SPECTATOR,
    NAME,
    PRIVILEGE_ID,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#SFSEventType
 *
 * The SFSEventType object lists all server-side events dispatched to an Extension, provided an handler was registered.
 */
declare enum SFSEventType {
    BUDDY_ADD,
    BUDDY_BLOCK,
    BUDDY_LIST_INIT,
    BUDDY_MESSAGE,
    BUDDY_ONLINE_STATE_UPDATE,
    BUDDY_REMOVE,
    BUDDY_VARIABLES_UPDATE,
    FILE_UPLOAD,
    GAME_INVITATION_FAILURE,
    GAME_INVITATION_SUCCESS,
    PLAYER_TO_SPECTATOR,
    PRIVATE_MESSAGE,
    PUBLIC_MESSAGE,
    ROOM_ADDED,
    ROOM_REMOVED,
    ROOM_VARIABLES_UPDATE,
    SERVER_READY,
    SPECTATOR_TO_PLAYER,
    USER_DISCONNECT,
    USER_JOIN_ROOM,
    USER_JOIN_ZONE,
    USER_LEAVE_ROOM,
    USER_LOGIN,
    USER_LOGOUT,
    USER_RECONNECTION_SUCCESS,
    USER_RECONNECTION_TRY,
    USER_VARIABLES_UPDATE,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#SFSRoomRemoveMode
 *
 * The SFSRoomRemoveMode enum lists all possible auto-removal modes of dynamically created Rooms.
 */
declare enum SFSRoomRemoveMode {
    DEFAULT,
    NEVER_REMOVE,
    WHEN_EMPTY,
    WHEN_EMPTY_AND_CREATOR_IS_GONE,
}

declare enum SFSRoomSettings {
    ROOM_NAME_CHANGE,
    CAPACITY_CHANGE,
    PASSWORD_STATE_CHANGE,
    PUBLIC_MESSAGES,
    USER_COUNT_CHANGE_EVENT,
    USER_ENTER_EVENT,
    USER_EXIT_EVENT,
    USER_VARIABLES_UPDATE_EVENT,
}

declare enum VariableType {
    NULL,
    BOOL,
    INT,
    DOUBLE,
    STRING,
    OBJECT,
    ARRAY,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#evtHandlerFn
 *
 * This callback function is called when the Extension receives an event fired by the server for which an handler has
 * been registered using the addEventHandler method.
 *
 * @param event The SFSEvent object containing the parameters of the specific event.
 */
type evtHandlerFn = (event: SFSEvent) => void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#httpCallbackFn
 *
 * This callback function is called when the Extension receives the response to an HTTP request sent using the
 * SFSApi.HttpRequest#execute method.
 *
 * @param result An object providing the result of the HTTP request.
 * The object contains the following parameters:
 * statusCode (number) - The status code of the request
 * html (string) - The content of the response (it could be HTML, JSON, XML, etc)
 * error (string - The error message (if the request failed)
 */
type httpCallbackFn = (result: {
    statusCode: number,
    html: string,
    error: string,
}) => void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#invCallBackHandler
 *
 * This callback handler is an object containing the onAccepted, onRefused and onExpired methods, respectively called
 * when an invitation sent using the GameApi#sendInvitation method is accepted, refused or expires before a reply is
 * received.
 *
 * @param invObj A SFSInvitation object representing the invitation sent to the recipient(s).
 * @param params The SFSObject containing the custom parameters attached to the invitation reply, if any. This parameter
 * is passed to onAccepted and onRefused functions only.
 */
type invCallBackHandler = (invObj: Invitation, params: SFSObject) => void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#reqHandlerFn
 *
 * This callback function is called when the Extension receives a request from a client for which an handler has been
 * registered using the addRequestHandler method.
 *
 * @param params The SFSObject containing the parameters attached to the client request.
 * @param sender The SFSUser object identifying the sender of the request.
 */
type reqHandlerFn = (params: SFSObject, sender: SFSUser) => void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#addEventHandler
 *
 * Registers an handler for an inner server event.
 *
 * All available event types fired by the server are listed in the SFSEventType enum.
 *
 * Event handlers can be registered in the Extension's init method; they receive an  SFSEvent object as the only
 * parameter.
 *
 * @param eventType One of the event types listed in the SFSEventType enum.
 * @param evtHandlerFn The function that will handle the event.
 */
declare function addEventHandler(eventType: SFSEventType, evtHandlerFn: evtHandlerFn): void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#addRequestHandler
 *
 * Registers a request handler for a specific command.
 *
 * Request handlers can be registered in the Extension's init method.
 *
 * @param cmdName The name of the command, which identifies the request sent by the client.
 * @param reqHandlerFn The function that will handle the incoming request.
 */
declare function addRequestHandler(cmdName: string, reqHandlerFn: reqHandlerFn): void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getApi
 *
 * Returns a reference to the SFSApi class instance, providing access to the main SmartFoxServer 2X server side API.
 *
 * @returns A reference to the SFSApi class instance.
 */
declare function getApi(): SFSApi;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getBuddyApi
 *
 * Returns a reference to the BuddyApi class instance, providing access to the specialized server side API related to
 * Buddy List features.
 *
 * @returns A reference to the BuddyApi class instance.
 */
declare function getBuddyApi(): BuddyApi;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getCurrentFolder
 *
 * Returns the relative path to the current Extension folder.
 *
 * Typically this method will return a string like "extensions/{name-of-extension}/". The path is relative to the server
 * root folder and it can be used to load external data files that are stored together with the Extension's JavaScript
 * file(s).
 *
 * @returns The path of the current Extension folder.
 */
declare function getCurrentFolder(): string;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getDBManager
 *
 * Returns a reference to the  SFSDBManager class instance attached to the Zone to which the Extension belongs.
 *
 * The Database Manager takes care of the connection to a database using either JDBC native drivers or JDBC-ODBC bridge;
 * it provides configurable connection pooling for optimal performance and resource usage.
 *
 * Each Zone runs its own Database Manager, which can be configured via the Zone Configurator module in the
 * SmartFoxServer 2X Administration Tool.
 *
 * @returns A reference to the  SFSDBManager class instance.
 */
declare function getDBManager(): SFSDBManager;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getFileApi
 *
 * Returns a reference to the FileApi class instance, providing access to the specialized server side API related to
 * files management.
 *
 * @returns A reference to the FileApi class instance.
 */
declare function getFileApi(): FileApi;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getGameApi
 *
 * Returns a reference to the GameApi class instance, providing access to the specialized server side API related to
 * SFSGame features.
 *
 * A reference to the GameApi class instance.
 */
declare function getGameApi(): GameApi;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getMMOApi
 *
 * Returns a reference to the MMOApi class instance, providing access to the specialized server side API related to MMO
 * features.
 *
 * @returns A reference to the MMOApi class instance.
 */
declare function getMMOApi(): MMOApi;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#getParentRoom
 *
 * Returns the SFSZone object which is parent to this Extension.
 *
 * If case of a Zone-level Extension, this method returns its parent Extension; in case of a Room-level Extension, it
 * returns the Zone to which the Room belongs.
 *
 * @returns The SFSZone object to which the Extension belongs.
 */
declare function getParentRoom(): SFSRoom;

/**
 * Includes other JavaScript files in the Extension.
 *
 * This helps writing modular code, where classes, functions and other objects are divided into separate folders and/or
 * files.
 *
 * @param scriptPath The path of the JavaScript file to be included, relative to the main Extension script's folder.
 */
declare function include(scriptPath: string): void;

/**
 * Sends an Extension message/response to a list of recipients.
 *
 * The Extension response can be sent using the UDP protocol instead of the default TCP protocol. This is an unrealiable
 * network protocol that does not guarantee delivery and ordering of the packets, but it can be useful for fast data
 * transfer speed in real-time type games (typically for position/transformation updates).
 *
 * UDP messages can be sent to clients if: 1) the client technology supports it (for example HTML5 clients DO NOT
 * support UDP); 2) the client has already initialized the UDP protocol transmission.
 *
 * @param cmdName The name of the command, which identifies an action that should be executed by the client, or a
 * response that the client is waiting for.
 * @param params An SFSObject containing custom data to be sent to the client. If null is passed, no other data than the
 * command name is sent.
 * @param recipients An array of SFSUser objects identifying the recipients of the message.
 * @param isUdp If true, the message will be sent using the UDP protocol.
 */
declare function send(cmdName: string, params: SFSObject, recipients: SFSUser[], isUdp?: boolean): void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#setThreadSafe
 *
 * Changes the thread safety setting of the current Extension. By default thread-safety is enabled.
 *
 * @param value If false, the Extension will run as non thread-safe.
 */
declare function setThreadSafe(value: boolean): void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#trace
 *
 * Outputs the passed arguments to the console and log file.
 * This is useful for remote debugging when developing Extensions.
 *
 * @param arguments Any number of strings or objects to trace.
 */
declare function trace(...arguments: any[]): void;

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#trace
 */

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSArray.html
 *
 * SFSObject and SFSArray classes represent a platform-neutral, high level Java objects that abstract the data transport
 * between client and server. They are used to respectively represent data in form of a map and a list; they can be
 * nested and transport many different data types.
 *
 * These objects provide high speed serialization using the default SmartFoxServer binary protocol and the types
 * distinction grants a fine-grained size control of data sent over the network.
 */
declare class SFSArray {
    constructor();
    addBool(value: boolean): void;
    addBoolArray(value: boolean[]): void;
    addByte(value: number): void;
    addByteArray(value: Uint8Array): void;
    addDouble(value: number): void;
    addDoubleArray(value: number[]): void;
    addFloat(value: number): void;
    addFloatArray(value: number[]): void;
    addInt(value: number): void;
    addIntArray(value: number[]): void;
    addLong(value: number): void;
    addLongArray(value: number[]): void;
    addNull(): void;
    addSFSArray(value: SFSArray): void;
    addSFSObject(value: SFSObject): void;
    addShort(value: number): void;
    addShortArray(value: number[]): void;
    addText(value: string): void;
    addUtfString(value: string): void;
    addUtfStringArray(value: string[]): void;
    contains(value: any): boolean;
    getBool(index: number): boolean | null;
    getBoolArray(index: number): boolean[] | null;
    getByte(index: number): number | null;
    getByteArray(index: number): number[] | null;
    getDouble(index: number): number | null;
    getDoubleArray(index: number): number[] | null;
    getFloat(index: number): number | null;
    getFloatArray(index: number): number[] | null;
    getInt(index: number): number | null;
    getIntArray(index: number): number[] | null;
    getLong(index: number): number | null;
    getLongArray(index: number): number[] | null;
    getSFSArray(index: number): SFSArray | null;
    getSFSObject(index: number): SFSObject | null;
    getShort(index: number): number | null;
    getShortArray(index: number): number | null;
    getText(index: number): string | null;
    getUtfString(index: number): string | null;
    getUtfStringArray(index: number): string[] | null;
    getDump(noFormat?: boolean): string;
    getHexDump(): string;
    isNull(index: number): boolean;
    size(): number;
    toString(): string;
}

declare class SFSObject {
    containsKey(key: string): boolean;
    getBool(key: string): boolean | null;
    getBoolArray(key: string): boolean[] | null;
    getByte(key: string): number | null;
    getByteArray(key: string): Uint8Array | null;
    getDouble(key: string): number | null;
    getDoubleArray(key: string): number[] | null;
    getDump(noFormat?: boolean): number | null;
    getFloat(key: string): number | null;
    getFloatArray(key: string): number[] | null;
    getInt(key: string): number | null;
    getIntArray(key: string): number[] | null;
    getLong(key: string): number | null;
    getLongArray(key: string): number[] | null;
    getSFSArray(key: string): SFSArray | null;
    getSFSObject(key: string): SFSObject | null;
    getShort(key: string): number | null;
    getShortArray(key: string): number | null;
    getText(key: string): string | null;
    getUtfString(key: string): string | null;
    getUtfStringArray(key: string): string[] | null;
    getKeys(): string[];
    getHexDump(): string;
    isNull(): boolean;
    putBool(key: string, value: boolean): void;
    putBoolArray(key: string, value: boolean[]): void;
    putByte(key: string, value: number): void;
    putByteArray(key: string, value: Uint8Array): void;
    putDouble(key: string, value: number): void;
    putDoubleArray(key: string, value: number[]): void;
    putFloat(key: string, value: number): void;
    putFloatArray(key: string, value: number[]): void;
    putInt(key: string, value: number): void;
    putIntArray(key: string, value: number[]): void;
    putLong(key: string, value: number): void;
    putLongArray(key: string, value: number[]): void;
    putNull(key: string): void;
    putSFSArray(key: string, value: SFSArray): void;
    putSFSObject(key: string, value: SFSObject): void;
    putShort(key: string, value: number): void;
    putShortArray(key: string, value: number[]): void;
    putText(key: string, value: string): void;
    putUtfString(key: string, value: string): void;
    putUtfStringArray(key: string, value: string[]): void;
    removeElement(key: string): boolean;
    size(): number;
    toString(): string;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSBuddyVariable.html
 *
 * The SFSBuddyVariable class represents a Buddy Variable, a custom value attached to a Buddy in a Buddy List.
 *
 * Buddy Variables work with the same principle of the User/Room Variables. The only difference is the logic by which
 * they get propagated to other users: while Room Variables are broadcast to all clients in the same Room, Buddy
 * Variables are sent to all users who have the variable owner in their Buddy Lists.
 */
declare class SFSBuddyVariable {
    /**
     * Creates a new SFSBuddyVariable instance.
     *
     * Although the third parameter is optional, it is strongly recommended to use it. The reason is type autodetection
     * of numbers (being integers or double precision numbers) may fail in some corner cases (for example n1 =
     * Math.floor(100.0 - 99.0) will be treated as a double instead of an integer as expected).
     *
     * @param name The name of the Buddy Variable.
     * @param value The value of the Buddy Variable; it can also be null.
     * @param type The type of the Buddy Variable's value, among those listed in the VariableType enum; if null, type is
     * autodetected.
     */
    constructor(
        name: string,
        value: boolean | number | string | SFSArray | SFSObject | null,
        type?: VariableType);
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSRoomVariable.html
 *
 * The SFSRoomVariable class represents a Room Variable, a custom value attached to a Room object that gets
 * automatically updated between client and server on every change.
 *
 * Room Variables are particularly useful to "attach" any custom data to a Room, such as the current game status in a
 * game Room, the topic in chat Room, other Room-specific properties, etc.
 */
declare class SFSRoomVariable {
    /**
     * Creates a new SFSRoomVariable instance.
     *
     * Although the third parameter is optional, it is strongly recommended to use it. The reason is type autodetection
     * of numbers (being integers or double precision numbers) may fail in some corner cases (for example n1 =
     * Math.floor(100.0 - 99.0) will be treated as a double instead of an integer as expected).
     *
     * @param name The name of the Room Variable.
     * @param value The value of the Room Variable; it can also be null.
     * @param type The type of the Room Variable's value, among those listed in the VariableType enum; if null, type is
     * autodetected.
     */
    constructor(
        name: string,
        value: boolean | number | string | SFSArray | SFSObject | null,
        type?: VariableType);
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSUserVariable.html
 *
 * The SFSUserVariable class represents a User Variable, a custom value attached to each User object that gets
 * automatically updated between client and server on every change.
 *
 * User Variables are particularly useful to assign any custom data to a user, such as his current in-game status,
 * profile data, scoring, etc.
 */
declare class SFSUserVariable {
    /**
     * Creates a new SFSUserVariable instance.
     *
     * Although the third parameter is optional, it is strongly recommended to use it. The reason is type autodetection
     * of numbers (being integers or double precision numbers) may fail in some corner cases (for example n =
     * Math.floor(100.0 - 99.0) will be treated as a double instead of an integer as expected).
     *
     * @param name The name of the User Variable.
     * @param value The value of the User Variable; it can also be null.
     * @param type The type of the User Variable's value, among those listed in the VariableType enum; if null, type is
     * autodetected.
     */
    constructor(
        name: string,
        value: boolean | number | string | SFSArray | SFSObject | null,
        type?: VariableType);
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/CreateRoomSettings.html
 *
 * The CreateRoomSettings class allows to configure how a new Room will work under many different aspects, from its size
 * to the events it can fire, permissions and a lot more.
 */
declare class CreateRoomSettings {
    /** Creates a new CreateRoomSettings instance. */
    constructor();
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/CreateMMORoomSettings.html
 *
 * The CreateMMORoomSettings class extends the basic CreateRoomSettings class adding new functionalities that are unique
 * to an MMORoom.
 *
 * For a full discussion of the MMORoom features, see the  MMORoom class documentation.
 */
declare class CreateMMORoomSettings extends CreateRoomSettings {
    /** Creates a new CreateMMORoomSettings instance. */
    constructor();
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/CreateSFSGameSettings.html
 *
 * The CreateSFSGameSettings class extends the basic CreateRoomSettings class providing all the settings required to
 * create an SFSGame.
 *
 * The SFSGame is a specialized Room, part of the SmartFoxServer 2X Game API. This provides many advanced features such
 * as player matching, game invitations, public and private games, quick game joining, etc.
 *
 * For an introduction to the SFSGame features, see the  SFSGame class documentation.
 */
declare class CreateSFSGameSettings extends CreateRoomSettings {
    /** Creates a new CreateSFSGameSettings instance. */
    constructor();
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/RoomExtensionSettings.html
 *
 * The RoomExtensionSettings class defines the server side Extension to be dynamically attached to a Room, to add custom
 * logic for games and applications.
 */
declare class RoomExtensionSettings {
    /**
     * Creates a new RoomExtensionSettings instance to be passed to the CreateRoomSettings class.
     * @param id The id of the Extension, corresponding to the Extension folder name.
     * @param className The Extension main JavaScript file or Java class.
     */
    constructor(id: string, className: string);
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/MatchExpression.html
 *
 * The MatchExpression class represents a Match Expression, a querying system to search for Rooms or Users using custom
 * criteria.
 */
declare class MatchExpression {
    /**
     * Creates a new MatchExpression instance.
     * @param varName The name of the User/Room Variable or one of the properties listed in RoomProperties or
     * UserProperties enums.
     * @param condition A matching condition among those provided by the BoolMatch, NumberMatch and StringMatch enums.
     * @param value The value to compare against the User/Room Variable or property during the matching.
     */
    constructor(varName: string, condition: BoolMatch | NumberMatch | StringMatch, value: boolean | number | string);
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/EnumSet.html
 *
 * The EnumSet class is a specialized collection to use when an API method requires a list of enum values to be passed.
 */
declare class EnumSet {
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/FileApi.html
 *
 * The FileApi class provides specialized API calls to interact with the file system.
 */
declare class FileApi {
    /**
     * Copies a file to a new location.
     *
     * This method copies the contents of the specified source path to the specified destination path. The folder
     * holding the destination file is created if it does not exist. If the destination file exists, then this method
     * will overwrite it.
     *
     * @param srcPath The path to an existing file to copy.
     * @param destPath The path of the destination file.
     */
    copyFile(srcPath: string, destPath: string): void;

    /**
     * Deletes a folder including all its sub-folders, never throwing an exception.
     * @param dirPath The path of the folder to delete.
     * @returns true if the folder was deleted, false otherwise.
     */
    deleteDirectory(dirPath: string): boolean;

    /**
     * Deletes a file, never throwing an exception.
     * @param filePath The path of the file to delete.
     * @returns true if the file was deleted, false otherwise.
     */
    deleteFile(filePath: string): boolean;

    /**
     * Returns the relative path to the current Extension folder.
     *
     * Typically this method will return a string like "extensions/{name-of-extension}/". The path is relative to the
     * server root folder and it can be used to load external data files that are stored together with the Extension's
     * JavaScript file(s).
     *
     * @returns The path of the current Extension folder.
     */
    getCurrentFolder(): string;

    /**
     * Returns the length of the file denoted by the passed path.
     * @param filePath The path of the file to get the size of.
     * @returns The length, in bytes, of the file denoted by the passed path.
     */
    getFileSize(filePath: string): number;

    /**
     * Tests whether the file denoted by the passed path is a directory.
     * @param filePath The path of the file to check.
     * @returns true if and only if the file denoted by the passed path exists and is directory; false otherwise.
     */
    isDirectory(filePath: string): boolean;

    /**
     * Tests whether the file denoted by the passed path is a normal file.
     * @param filePath The path of the file to check.
     * @returns true if and only if the file denoted by the passed path exists and is a normal file; false otherwise.
     */
    isFile(filePath: string): boolean;

    /**
     * Makes a directory, including any necessary but nonexistent parent directories.
     * @param fullPath The path of the direcotry to create.
     */
    makeDirectory(fullPath: string): void;

    /**
     * Moves a file to a new location.
     * @param srcPath The path to an existing file to be moved.
     * @param destPath The path of the destination file.
     */
    moveFile(srcPath: string, destPath: string): void;

    /**
     * Reads the contents of a file into an array of bytes. The file is always closed.
     * @param filePath The path of the file to read.
     * @returns The file contents as a Java byte array (byte[]). The content of the array can be accessed using the
     * methods of native JavaScript arrays.
     */
    readBinaryFile(filePath: string): Uint8Array;

    /**
     * Writes a Java byte array (byte[]) to a file, creating the file if it does not exist.
     * @param filePath The path of the file to write.
     * @param data The Java byte array to write to the file.
     */
    writeBinaryFile(filePath: string, data: Uint8Array): void;

    /**
     * Writes a string to a file using the default encoding for the Java Virtual Machine, creating the file if it does
     * not exist.
     * @param filePath The path of the file to write.
     * @param data The content to write to the file.
     */
    writeTextFile(filePath: string, data: string): void;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/GameApi.html
 *
 * The GameApi class provides specialized API calls for advanced game functionalities. It contains methods to search
 * opponents based on matching criteria, challenge other players or send invitations to join a game, start quick games
 * and more.
 */
declare class GameApi {
    /**
     * Creates a new Room of type SFSGame.
     *
     * The SFSGame class extends the normal capabilities of a Room, adding the ability to set the game as private and
     * provide a list of users that the system will invite to play automatically. Additionally the system is be able to
     * invite more users if the number of players is not sufficient to start the game.
     *
     * @param zone The SFSZone object representing the Zone the SFSGame should be created into.
     * @param settings The SFSGame configuration object.
     * @param owner The  SFSUser object representing the owner of the SFSGame; if null is passed, the "Server" will be
     * the owner.
     * @param fireClientEvent If true, a client-side ROOM_ADD event will be fired to notify the SFSGame creation.
     * @param fireServerEvent If true, a server-side event of type SFSEventType.ROOM_ADDED will be fired to notify the
     * SFSGame creation.
     * @returns The SFSGame object representing the Room of type SFSGame just created.
     */
    createGame(
        zone: SFSZone,
        settings: CreateSFSGameSettings,
        owner?: SFSUser,
        fireClientEvent?: boolean,
        fireServerEvent?: boolean,
    ): SFSGame;

    /**
     * Quickly joins a user in an Room of type SFSGame.
     * @param user Quickly joins a user in an Room of type SFSGame.
     * @param expression A Match Expression containing the Room search criteria to find the appropriate SFSGame to join
     * the user in.
     * @param zone The  SFSZone object representing the Zone where to search available SFSGames in. This is ignored if a
     * list of SFSGame objects is passed as the next parameter.
     * @param searchItem The name of a Room Group or a list of  SFSGame objects where to search an available SFSGame in.
     * @param roomToLeave A SFSRoom object representing the Room to leave after having successfully joined the SFSGame.
     * @returns The SFSGame object representing the SFSGame that was joined.
     */
    quickJoinGame(
        user: SFSUser,
        expression: MatchExpression,
        zone: SFSZone,
        searchItem: string | SFSGame[],
        roomToLeave: SFSRoom,
    ): SFSGame;

    /**
     * Sends a reply to an invitation.
     *
     * Replying to an invitation means to accept or refuse it.
     *
     * @param invitedUser The SFSUser object representing the user who received the invitation.
     * @param invitationId The id of the invitation, which can be retrieved from the SFSInvitation object received by
     * the invited client.
     * @param reply One of the invitation replies provided in the InvitationResponse enum; only ACCEPT and REFUSE are
     * valid replies, while EXPIRED is reserved to the system.
     * @param params A SFSObject containing custom parameters to be attached to the reply.
     * @param fireClientEvent If true, a client-side INVITATION_REPLY event will be fired to notify the reply.
     */
    replyToInvitation(
        invitedUser: SFSUser,
        invitationId: number,
        reply: InvitationResponse,
        params?: SFSObject,
        fireClientEvent?: boolean,
    ): void;

    /**
     * Sends an invitation to a user.
     *
     * An invitation can be sent for various purposes, such as joining a Room (both regular and game ones), adding a
     * friend to the Buddy List, etc.
     *
     * @param inviter The SFSUser object representing the user sending the invitation.
     * @param invitees A list of SFSUser objects representing the recipients of the invitation.
     * @param expirySeconds The amount of time allowed to each invitee to accept or refuse the invitation.
     * @param invCallBackHandler The object that will handle the reply to the invitation (accept or refuse).
     * @param params A SFSObject containing custom parameters to be attached to the invitation (e.g. a message).
     */
    sendInvitation(
        inviter: SFSUser,
        invitees: SFSUser[],
        expirySeconds: number,
        invCallBackHandler: invCallBackHandler,
        params?: SFSObject,
    ): void;

    /**
     * Invites a user to join an existing Room of any type.
     *
     * If the invitation is accepted, the invitee will be automatically joined in the target Room.
     *
     * @param target A SFSRoom object representing the Room to invite the invitees to.
     * @param inviter The SFSUser object representing the user sending the invitation.
     * @param invitees A list of SFSUser objects representing the recipients of the invitation.
     * @param expirySeconds The amount of time allowed to each invitee to accept or refuse the invitation.
     * @param asSpect If true, the provided list of invitees will be joined as spectators (where applicable, i.e. Rooms
     * of type game).
     * @param leaveLastJoinedRoom If true, the users joining the target Room will leave the previously joined Room.
     * @param params A SFSObject containing custom parameters to be attached to the invitation (e.g. a message).
     */
    sendJoinRoomInvitation(
        target: SFSRoom,
        inviter: SFSUser,
        invitees: SFSUser[],
        expirySeconds: number,
        asSpect?: boolean,
        leaveLastJoinedRoom?: boolean,
        params?: SFSObject,
    ): void;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSApi.html
 *
 * The SFSApi class provides the central access to the main SmartFoxServer 2X server side API. It contains all basic
 * methods for interacting with the server: creating Rooms, joining them, logging in/out, handling messages, creating
 * User/Room Variables and much more.
 */
declare class SFSApi {
    banUser(userToBan: SFSUser, modUser: SFSUser, banMessage: string, mode: BanMode, delaySeconds: number): void;
    changeRoomCapacity(owner: SFSUser, targetRoom: SFSRoom, maxUsers: number, maxSpectators: number): void;
    changeRoomName(owner: SFSUser, targetRoom: SFSRoom, newName: string): void;
    changeRoomPassword(owner: SFSUser, targetRoom: SFSRoom, newPassword: string): void;
    checkSecurePassword(session: Session, originalPass: string, encryptedPass: string): boolean;
    createNPC(userName: string, zone: SFSZone, forceLogin: boolean): SFSUser;
    createRoom(
        zone: SFSZone,
        settings: CreateRoomSettings | CreateMMORoomSettings,
        owner?: SFSUser,
        joinIt?: boolean,
        roomToLeave?: SFSRoom,
        fireClientEvent?: boolean,
        fireServerEvent?: boolean): SFSRoom;
    disconnectSession(session: Session): void;
    disconnectUser(user: SFSUser, reason?: ClientDisconnectionReason): void;
    findRooms(roomList: SFSRoom[], expression: MatchExpression, limit?: number): SFSRoom[];
    findUsers(userList: SFSUser[], expression: MatchExpression, limit?: number): SFSRoom[];
    getUserById(userId: number): SFSUser;
    getUserByName(zone: SFSZone, name: string): SFSUser;
    getUserBySession(session: Session): SFSUser;
    getZoneByName(zoneName: string): SFSZone;
    joinRoom(
        user: SFSUser,
        roomToJoin: SFSRoom,
        password?: string,
        asSpectator?: boolean,
        roomToLeave?: SFSRoom,
        fireClientEvent?: boolean,
        fireServerEvent?: boolean): void;
    kickUser(userToKick: SFSUser, modUser: SFSUser, kickMessage: string, delaySeconds: number): void;
    leaveRoom(user: SFSUser, room: SFSRoom, fireClientEvent?: boolean, fireServerEvent?: boolean): void;
    logout(user: SFSUser): void;
    newHttpGetRequest(url: string, params: object, httpCallbackFn: httpCallbackFn): SFSApi.HttpRequest;
    newHttpPostRequest(url: string, params: object, httpCallbackFn: httpCallbackFn): SFSApi.HttpRequest;
    newScheduler(threadPoolSize?: number): SFSApi.TaskScheduler;
    playerToSpectator(user: SFSUser, targetRoom: SFSRoom, fireClientEvent?: boolean, fireServerEvent?: boolean): void;
    removeRoom(room: SFSRoom, fireClientEvent?: boolean, fireServerEvent?: boolean): void;
    sendAdminMessage(sender: SFSUser, message: string, params: SFSObject, recipients: Session[]): void;
    sendModeratorMessage(sender: SFSUser, message: string, params: SFSObject, recipients: Session[]): void;
    sendObjectMessage(targetRoom: SFSRoom, sender: SFSUser, message: SFSObject, recipients?: SFSUser[]): void;
    sendPrivateMessage(sender: SFSUser, recipient: SFSUser, message: string, params?: SFSObject): void;
    sendPublicMessage(targetRoom: SFSRoom, sender: SFSUser, message: string, params?: SFSObject): void;
    setRoomVariables(
        user: SFSUser,
        targetRoom: SFSRoom,
        variables: SFSRoomVariable[],
        fireClientEvent?: boolean,
        fireServerEvent?: boolean,
        overrideOwnership?: boolean): void;
    setUserVariables(
        user: SFSUser,
        variables: SFSUserVariable[],
        fireClientEvent?: boolean,
        fireServerEvent?: boolean): void;
    spectatorToPlayer(user: SFSUser, targetRoom: SFSRoom, fireClientEvent?: boolean, fireServerEvent?: boolean): void;
    subscribeRoomGroup(user: SFSUser, groupId: string): void;
    unsubscribeRoomGroup(user: SFSUser, groupId: string): void;
}

declare namespace SFSApi {
    enum HttpMode {
        POST,
        GET,
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSApi.HttpRequest.html
     *
     * The HttpRequest class represents a request to be sent to an external HTTP/HTTPS server.
     *
     * HTTP/S requests can be of type POST or GET. They are useful to retrieve data from or send data to external
     * services.
     */
    class HttpRequest {
        /**
         * Creates a new HttpRequest instance.
         *
         * Using the SFSApi#newHttpGetRequest or SFSApi#newHttpPostRequest factory methods instead of this constructor
         * is recommended. See the methods description for usage examples.
         *
         * @param url The address of the HTTP server to make the request to.
         * @param params An object containing the parameters to send to the HTTP server.
         * @param mode The HTTP request mode (GET or POST).
         * @param httpCallbackFn The callback function that will process the response sent by the HTTP server.
         */
        constructor(url: string, params: any, mode: HttpMode, httpCallbackFn: httpCallbackFn);

        /** Executes the HTTP request and calls the httpCallbackFn callback function passed to the constructor. */
        execute(): void;

        /**
         * Gets the HTTP request timeout seconds.
         * @returns The number of seconds after which the HTTP request will be considered failed.
         */
        getConnectionTimeoutSeconds(): number;

        /**
         * Sets the HTTP request timeout seconds.
         * @param value The number of seconds after which the HTTP request will be considered failed.
         */
        setConnectionTimeoutSeconds(value: number): void;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSApi.TaskScheduler.html
     *
     * The TaskScheduler class allows to manage multiple delayed or repeating activities.
     *
     * In games, a delayed scheduled task can be useful to set the duration of a match, or set a time limit to a user
     * action, etc. An interval-based task instead can be used to spawn new NPC enemies on a time basis, or divide the
     * game in rounds, etc.
     */
    class TaskScheduler {
        /**
         * Creates a new TaskScheduler instance.
         *
         * Using the SFSApi#newScheduler factory method instead of this constructor is recommended. See the method
         * description for a usage example.
         *
         * @param threadPoolSize The number of threads backing the scheduler (recommended value between 1 and 4).
         */
        constructor(threadPoolSize: number);

        /** Destroys the TaskScheduler instance and all the tasks that are currently running. */
        destroy(): void;

        /**
         * Returns the size of the thread pool handling the tasks.
         * @returns The number of threads backing the scheduler.
         */
        getThreadPoolSize(): number;

        /**
         * Schedules a new task to be executed in the future, once.
         * @param runnerFn The function to be executed after the provided time delay has passed.
         * @param delay The amount of time before the runner function is executed.
         * @param context An object representing the scope of the runner function (also known as the "this" object).
         * @returns A reference to the ScheduledFuture Java class representing the scheduled task; it is useful to keep
         * a reference to this object, in case the task execution needs to be cancelled later.
         */
        schedule(runnerFn: () => void, delay: number, context?: any): ScheduledFuture;

        /**
         * Schedules a new task to be executed periodically.
         * @param runnerFn The function to be executed at each interval.
         * @param interval The interval at which the runner function should be executed.
         * @param delay The initial amount of time before the runner function is executed for the first time.
         * @param context An object representing the scope of the runner function (also known as the "this" object).
         */
        scheduleAtFixedRate(runnerFn: () => void, interval: number, delay?: number, context?: any): ScheduledFuture;
    }
}

declare class BuddyApi {
}

declare class ScheduledFuture {
}

declare class Invitation {
}

declare class Session {
}

declare class MMOApi {
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/db/SFSDBManager.html */
declare class SFSDBManager {
    executeInsert(sql: string, ...params: any[]): void;
    executeQuery(sql: string, ...params: any[]): SFSArray;
    executeUpdate(sql: string, ...params: any[]): void;
    getActiveConnections(): number;
    getIdleConnections(): number;
    getName(): string;
    isActive(): boolean;
    setName(name: string): void;
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/core/SFSEvent.html */
declare class SFSEvent {
    getType(): SFSEventType;
    toString(): string;
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/game/SFSGame.html */
declare class SFSGame extends SFSRoom {
    getMinPlayersToStartGame(): number;
    getPlayerMatchExpression(): MatchExpression;
    getSpectatorMatchExpression(): MatchExpression;
    isGameStarted(): boolean;
    isGameStateChanged(): boolean;
    isLeaveLastRoomOnJoin(): boolean;
    isNotifyGameStarted(): boolean;
    removeUser(user: User): void;
    setLeaveLastRoomOnJoin(leaveLastRoomOnJoin: boolean): void;
    setMinPlayersToStartGame(min: number): void;
    setNotifyGameStarted(notifyGameStarted: boolean): void;
    setPlayerMatchExpression(exp: MatchExpression): void;
    setSpectatorMatchExpression(spectatorMatchExpression: MatchExpression): void;
    switchPlayerToSpectator(user: User): void;
    switchSpectatorToPlayer(user: User): void;
    toString(): string;
}

declare class User {
    addCreatedRoom(room: Room): void;
    addJoinedRomo(romo: Room): void;
    addPersistentRoomVarReference(target: Room): void;
    containsVariable(varName: string): boolean;
    getCreatedRooms(): Room[];
    getDump(): string;
    getFloodWarnings(): number;
    getId(): number;
}

declare class UserManager {
}

declare class SFSUser extends User {
}

declare class Room {
}

declare class SFSRoom extends Room {
    addUser(user: User, asSpectator?: boolean): void;
    containsProperty(key: any): boolean;
    containsUser(nameOrUser: string | User): boolean;
    containsVariable(varName: string): boolean;
    destroy(): void;
    getCapacity(): number;
    getDump(): string;
    getExtension(): SFSExtension;
    getGroupId(): string;
    getId(): number;
    getLifeTime(): number;
    getMaxRoomVariablesAllowed(): number;
    getMaxSpectators(): number;
    getMaxUsers(): number;
    getName(): string;
    getOwner(): User;
    getPassword(): string;
    getPlayerIdGeneratorClassName(): string;
    getPlayersList(): User[];
    getRoomVariablesData(globalsOnly: boolean): SFSArray;
    getSessionList(): Session[];
    getSpectatorList(): User[];
    getUserById(id: number): User | null;
    getUserByName(name: string): User | null;
    getUserByPlayerId(playerId: number): User | null;
    getUserBySession(session: Session): User | null;
    getUserList(): User[];
    getUserListData(): SFSArray;
    getUserManager(): UserManager;
}

declare class SFSExtension {
}

declare class SFSZone {
}