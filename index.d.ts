// tslint:disable:member-access
// tslint:disable:no-namespace

declare class Java {
    static type<T>(package: string): T;
}

declare namespace java {
    /**
     * https://docs.oracle.com/javase/7/docs/api/java/util/class-use/UUID.html
     * java.util.UUID
     */
    class UUID {
        static randomUUID(): UUID;
        toString(): string;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/exceptions/IErrorCode.html
     * com.smartfoxserver.v2.exceptions.IErrorCode
     */
    class IErrorCode {
        getId(): number;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/exceptions/SFSErrorCode.html
     * com.smartfoxserver.v2.exceptions.SFSErrorCode
     */
    class SFSErrorCode extends IErrorCode {
        static readonly BUDDY_BLOCK_FAILURE: SFSErrorCode;
        static readonly BUDDY_LIST_FULL: SFSErrorCode;
        static readonly BUDDY_LIST_LOAD_FAILURE: SFSErrorCode;
        static readonly BUDDY_TOO_MANY_VARIABLES: SFSErrorCode;
        static readonly CREATE_ROOM_BAD_GROUP: SFSErrorCode;
        static readonly CREATE_ROOM_EXCEED_USER_LIMIT: SFSErrorCode;
        static readonly CREATE_ROOM_WRONG_PARAMETER: SFSErrorCode;
        static readonly CREATE_ROOM_ZONE_FULL: SFSErrorCode;
        static readonly GENERIC_ERROR: SFSErrorCode;
        static readonly HANDSHAKE_API_OBSOLETE: SFSErrorCode;
        static readonly INVITATION_NOT_VALID: SFSErrorCode;
        static readonly JOIN_ALREADY_JOINED: SFSErrorCode;
        static readonly JOIN_BAD_PASSWORD: SFSErrorCode;
        static readonly JOIN_BAD_ROOM: SFSErrorCode;
        static readonly JOIN_GAME_ACCESS_DENIED: SFSErrorCode;
        static readonly JOIN_GAME_NOT_FOUND: SFSErrorCode;
        static readonly JOIN_ROOM_FULL: SFSErrorCode;
        static readonly JOIN_ROOM_LOCKED: SFSErrorCode;
        static readonly LOGIN_ALREADY_LOGGED: SFSErrorCode;
        static readonly LOGIN_BAD_PASSWORD: SFSErrorCode;
        static readonly LOGIN_BAD_USERNAME: SFSErrorCode;
        static readonly LOGIN_BAD_ZONENAME: SFSErrorCode;
        static readonly LOGIN_BANNED_IP: SFSErrorCode;
        static readonly LOGIN_BANNED_USER: SFSErrorCode;
        static readonly LOGIN_GUEST_NOT_ALLOWED: SFSErrorCode;
        static readonly LOGIN_INACTIVE_ZONE: SFSErrorCode;
        static readonly LOGIN_NAME_CONTAINS_BAD_WORDS: SFSErrorCode;
        static readonly LOGIN_SERVER_FULL: SFSErrorCode;
        static readonly LOGIN_ZONE_FULL: SFSErrorCode;
        static readonly ROOM_CAPACITY_CHANGE_PERMISSION_ERR: SFSErrorCode;
        static readonly ROOM_DUPLICATE_NAME: SFSErrorCode;
        static readonly ROOM_NAME_BAD_SIZE: SFSErrorCode;
        static readonly ROOM_NAME_CHANGE_PERMISSION_ERR: SFSErrorCode;
        static readonly ROOM_NAME_CONTAINS_BADWORDS: SFSErrorCode;
        static readonly ROOM_PASS_CHANGE_PERMISSION_ERR: SFSErrorCode;
        static readonly SUBSCRIBE_GROUP_ALREADY_SUBSCRIBED: SFSErrorCode;
        static readonly SUBSCRIBE_GROUP_NOT_FOUND: SFSErrorCode;
        static readonly SWITCH_NO_PLAYER_SLOTS_AVAILABLE: SFSErrorCode;
        static readonly SWITCH_NO_SPECTATOR_SLOTS_AVAILABLE: SFSErrorCode;
        static readonly SWITCH_NOT_A_GAME_ROOM: SFSErrorCode;
        static readonly SWITCH_NOT_JOINED_IN_ROOM: SFSErrorCode;
        static readonly UNSUBSCRIBE_GROUP_NOT_FOUND: SFSErrorCode;
        static readonly UNSUBSCRIBE_GROUP_NOT_SUBSCRIBED: SFSErrorCode;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/exceptions/SFSErrorData.html
     * com.smartfoxserver.v2.exceptions.SFSErrorData
     */
    class SFSErrorData {
        constructor(code: IErrorCode);
        addParameter(parameter: string): void;
        getCode(): IErrorCode;
        getParams(): string[];
        setCode(code: IErrorCode): void;
        setParams(params: string[]): void;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/exceptions/SFSException.html
     * com.smartfoxserver.v2.exceptions.SFSException
     */
    class SFSException {
        constructor(message?: string, data?: SFSErrorData);
        getErrorData(): SFSErrorData;
    }

    /**
     * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/exceptions/SFSLoginException.html
     * com.smartfoxserver.v2.exceptions.SFSLoginException
     */
    class SFSLoginException extends SFSException {
        constructor(message?: string, data?: SFSErrorData);
    }

    /** com.smartfoxserver.v2.core.SFSConstants */
    class SFSConstants {
        static readonly REQUEST_LOGIN_DATA_OUT: string;
        static readonly NEW_LOGIN_NAME: string;
        static readonly SESSION_CLIENT_TYPE: string;
        static readonly DEFAULT_PLAYER_ID_GENERATOR: string;
        static readonly CLIENT_UNKNOWN_TYPE: string;
        static readonly REQUEST_UDP_PACKET_ID: string;
        static readonly STORAGE_DATA_FOLDER: string;
        static readonly BLUEBOX_CONNECTION_MANAGER_INSTANCE: string;
        static readonly CCU_LOGGER_RUN_INTERVAL: number;
        static readonly LOG_ANALYSIS_RUN_CHECK_INTERVAL: number;
        static readonly ATTR_ENCRYPTED: string;
        static readonly SESSION_PERMISSION: string;
        static readonly SESSION_FAILED_LOGINS_COUNT: string;
        static readonly SESSION_GEOLOCATION: string;
        static readonly PROP_SERVICE_PROVIDER: string;
    }
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#BanMode
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/managers/BanMode.html
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
    /** The id of Group to which the Room belongs. */
    GROUP_ID,

    /** The Room has at least one free player slot. */
    HAS_FREE_PLAYER_SLOTS,

    /** The Room's isGame flag. */
    IS_GAME,

    /** The Room's isPrivate flag. */
    IS_PRIVATE,

    /** The Room is of type SFSGame. */
    IS_TYPE_SFSGAME,

    /** The Room's max number of spectators. */
    MAX_SPECTATORS,

    /** The Room's max number of users. */
    MAX_USERS,

    /** The name of the Room. */
    NAME,

    /** The number of spectators in the Room. */
    SPECTATOR_COUNT,

    /** The number of users in the Room. */
    USER_COUNT,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#UserProperties
 *
 * The UserProperties object lists all User properties that can be queried using a Match Expression.
 */
declare enum UserProperties {
    /** The user is currently joined in at least one Room. */
    IS_IN_ANY_ROOM,

    /** The user is a Non-Player Character. */
    IS_NPC,

    /** The user is a player in the joined Room. */
    IS_PLAYER,

    /** The user is a spectator in the joined Room. */
    IS_SPECTATOR,

    /** The name of the user. */
    NAME,

    /** The user's privilege id. */
    PRIVILEGE_ID,
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#SFSEventType
 *
 * The SFSEventType object lists all server-side events dispatched to an Extension, provided an handler was registered.
 */
declare enum SFSEventType {
    /** The event fired when a user is added in the Buddy List of another client. */
    BUDDY_ADD,

    /** The event fired when a Buddy is blocked in user's Buddy List. */
    BUDDY_BLOCK,

    /** The event fired when a user initializes his Buddy List. */
    BUDDY_LIST_INIT,

    /** The event fired when a Buddy Message is exchanged between two buddies. */
    BUDDY_MESSAGE,

    /** The event fired when a buddy changes his online state. */
    BUDDY_ONLINE_STATE_UPDATE,

    /** The event fired when a user is removed in the Buddy List of another client. */
    BUDDY_REMOVE,

    /** The event fired when one or more Buddy Variables are set by a user. */
    BUDDY_VARIABLES_UPDATE,

    /** The event fired when one or more files have been uploaded by a user connected in the current Zone. */
    FILE_UPLOAD,

    /** The event fired after a private SFSGame has finished the cycle of invitations with an error. */
    GAME_INVITATION_FAILURE,

    /** The event fired after a private SFSGame has finished the cycle of invitations successfully. */
    GAME_INVITATION_SUCCESS,

    /** The event fired when a user joined in a Game Room as a player is turned into a spectator. */
    PLAYER_TO_SPECTATOR,

    /** The event fired when a private message is sent by a client. */
    PRIVATE_MESSAGE,

    /** The event fired when a public message is sent by a client. */
    PUBLIC_MESSAGE,

    /** The event fired after a new Room was created in the current Zone. */
    ROOM_ADDED,

    /** The event fired after a Room was removed from the current Zone. */
    ROOM_REMOVED,

    /** The event fired when one or more Room Variables are set. */
    ROOM_VARIABLES_UPDATE,

    /** The event fired when SmartFoxServer has completed the boot phase. */
    SERVER_READY,

    /** The event fired when a user joined in a Game Room as a spectator is turned into a player. */
    SPECTATOR_TO_PLAYER,

    /** The event fired after a user disconnects himself or is disconnected. */
    USER_DISCONNECT,

    /** The event fired after a user has joined a Room. */
    USER_JOIN_ROOM,

    /** The event fired after a successful user login. */
    USER_JOIN_ZONE,

    /** The event fired after a user has left a Room. */
    USER_LEAVE_ROOM,

    /** The event fired when a user sends a login request. */
    USER_LOGIN,

    /** The event fired after a user logged out of the current Zone. */
    USER_LOGOUT,

    /**
     * The event fired when the HRC system is active and a client was successfully reconnected (feature not available
     * for JavaScript clients).
     */
    USER_RECONNECTION_SUCCESS,

    /**
     * The event fired when the HRC system is active and a client is trying to reconnect (feature not available for
     * JavaScript clients).
     */
    USER_RECONNECTION_TRY,

    /** The event fired when one or more User Variables are set. */
    USER_VARIABLES_UPDATE,
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/core/ISFSEventParam.html */
declare class ISFSEventParam {
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/core/SFSEventParam.html */
declare class SFSEventParam extends ISFSEventParam {
    /** A reason for the disconnection event, where applicable (ClientDisconnectionReason). */
    static readonly DISCONNECTION_REASON: SFSEventParam;

    /** The list of joined Rooms of a User that was disconnected (List of Room). */
    static readonly JOINED_ROOMS: SFSEventParam;

    /** The custom data sent at login time (SFSObject). */
    static readonly LOGIN_IN_DATA: SFSEventParam;

    /** The user name sent at login time (String). */
    static readonly LOGIN_NAME: SFSEventParam;

    /** The custom data to return to the user after a successful login (SFSObject). */
    static readonly LOGIN_OUT_DATA: SFSEventParam;

    /** The user password sent at login time (String). */
    static readonly LOGIN_PASSWORD: SFSEventParam;

    /** The chat message (String). */
    static readonly MESSAGE: SFSEventParam;

    /** An object with extra data (ISFSObject) */
    static readonly OJBECT: SFSEventParam;

    /** The PlayerId (Integer). */
    static readonly PLAYER_ID: SFSEventParam;

    /** A map of PlayerId by Room (Map) of Room, Integer. */
    static readonly PLAYER_IDS_BY_ROOM: SFSEventParam;

    /** The recipient of a message (User). */
    static readonly RECIPIENT: SFSEventParam;

    /** The Room in which the event was fired, where applicable (Room). */
    static readonly ROOM: SFSEventParam;

    /** The User Session (Session). */
    static readonly SESSION: SFSEventParam;

    /** List of uploaded files as List<UploadedFile> (List). */
    static readonly UPLOAD_FILE_LIST: SFSEventParam;

    /** Custom HTTP parameters passed in the upload HTTP POST call. */
    static readonly UPDATE_HTTP_PARAMS: SFSEventParam;

    /** The User that generated the event (User). */
    static readonly USER: SFSEventParam;

    /** A list of server variables (List). */
    static readonly VARIABLES: SFSEventParam;

    /** A list of server variables in map (key/value) form (Map). */
    static readonly VARIABLES_MAP: SFSEventParam;

    /** The Zone in which the event was fired (Zone). */
    static readonly ZONE: SFSEventParam;
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/buddylist/SFSBuddyEventParam.html */
declare class SFSBuddyEventParam extends ISFSEventParam {
    static readonly BUDDY: SFSBuddyEventParam;
    static readonly BUDDY_BLOCK_STATUS: SFSBuddyEventParam;
    static readonly BUDDY_IS_ONLINE: SFSBuddyEventParam;
    static readonly BUDDY_LIST: SFSBuddyEventParam;
    static readonly BUDDY_STATE: SFSBuddyEventParam;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/global.html#SFSRoomRemoveMode
 *
 * The SFSRoomRemoveMode enum lists all possible auto-removal modes of dynamically created Rooms.
 */
declare enum SFSRoomRemoveMode {
    /**
     * A regular Room is removed when it is empty and its creator is not connected anymore, while instead a game Room is
     * removed when it is empty.
     */
    DEFAULT,

    /** The Room is never removed (use with caution). */
    NEVER_REMOVE,

    /** The Room is removed immediately when the last user leaves it. */
    WHEN_EMPTY,

    /** The Room is removed when it is empty and its creator is not connected anymore. */
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
declare function getDBManager(): IDBManager;

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

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/data/ISFSArray.html */
declare class ISFSArray {
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
    toBinary(): Uint8Array;
    toJson(): string;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSArray.html
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/data/SFSArray.html
 *
 * SFSObject and SFSArray classes represent a platform-neutral, high level Java objects that abstract the data transport
 * between client and server. They are used to respectively represent data in form of a map and a list; they can be
 * nested and transport many different data types.
 *
 * These objects provide high speed serialization using the default SmartFoxServer binary protocol and the types
 * distinction grants a fine-grained size control of data sent over the network.
 */
declare class SFSArray extends ISFSArray {
    constructor();
    toString(): string;
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/data/ISFSObject.html */
declare class ISFSObject {
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
    toBinary(): Uint8Array;
    toJson(): string;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/jsdoc/server/SFSObject.html
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/data/SFSObject.html
 *
 * SFSObject and SFSArray classes represent a platform-neutral, high level Java objects that abstract the data transport
 * between client and server. They are used to respectively represent data in form of a map and a list; they can be
 * nested and transport many different data types.
 *
 * These objects provide high speed serialization using the default SmartFoxServer binary protocol and the types
 * distinction grants a fine-grained size control of data sent over the network.
 */
declare class SFSObject extends ISFSObject {
    static newFromBinaryData(bytes: Uint8Array): SFSObject;
    static newFromJsonData(jsonStr: string): ISFSObject;
    static newFromObject(o: any): SFSObject;
    static newInstance(): SFSObject;
    constructor();
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

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/core/ISFSEvent.html */
declare class ISFSEvent {
    /**
     * Get a parameter from the event object.
     * @param id The id/name of the parameter.
     * @returns The parameter value.
     */
    getParameter<T>(id: SFSEventParam): T;

    /**
     * Get the type of the event.
     * @returns The type of the event.
     */
    getType(): SFSEventType;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/core/SFSEvent.html
 *
 * The SFSEvent represents a Server side event. The SFS2X framework provide a large selection of events that any
 * Extension can listen to in order to react to various changes happening at runtime. For example server events can
 * notify the creation or destruction of a Room, the disconnection of a User, the login of a client and much more.
 */
declare class SFSEvent extends ISFSEvent {
    constructor(type: SFSEventType);

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

declare class UserVariable {
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/User.html */
declare class User {
    addCreatedRoom(room: Room): void;
    addJoinedRomo(romo: Room): void;
    addPersistentRoomVarReference(target: Room): void;
    containsProperty(key: any): boolean;
    containsVariable(varName: string): boolean;
    getBadWordsWarnings(): number;
    getCreatedRooms(): Room[];
    getDump(): string;
    getFloodWarnings(): number;
    getId(): number;
    getIdAddress(): string;
    getJoinedRooms(): Room[];
    getLastJoinedRoom(): Room;
    getLastProxyList(): User[];
    getLastRequestTime(): number;
    getLoginTime(): number;
    getMaxAllowedVariables(): number;
    getName(): string;
    getOwnedRoomsCount(): number;
    getPersistentRoomVarReferences(): number[];
    getPlayerId(): number;
    getPrivilegeId(): number;
    getProeprty(key: any): any;
    getSession(): ISession;
    getSubscribedGroups(): string[];
    getUserVariablesData(): ISFSArray;
    getVariable(key: string): UserVariable;
    getVariables(): UserVariable[];
    getVariablesCount(): number;
    getZone(): Zone;
    isBeingKicked(): boolean;
    isConnected(): boolean;
    isJoinedInRoom(room: Room): boolean;
    isJoining(): boolean;
    isLocal(): boolean;
    isNpc(): boolean;
    isPlayer(room?: Room): boolean;
    isSpectator(room?: Room): boolean;
    isSubscribedToGroup(groupId: string): boolean;
    isSuperUser(): boolean;
    removeCreatedRoom(room: Room): void;
    removeJoinedRoom(room: Room): void;
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

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/Zone.html */
declare class Zone {
    checkAndRemove(room: Room): void;
    containsGroup(groupId: string): boolean;
    containsProperty(key: any): boolean;
    containsPublicGroup(groupId: string): boolean;
    createRoom(params: CreateRoomSettings, user?: User): Room;
    getDBManager(): IDBManager;
    getDefaultGroups(): string[];
    getDefaultPlayerIdGeneratorClassName(): string;
    getDump(): string;
    getGameRoomCount(): number;
    getGroups(): string[];
    getGuestUserNamePrefix(): string;
    getId(): number;
    getMaxAllowedRooms(): number;
    getMaxAllowedUsers(): number;
    getMaxFailedLogins(): number;
    getMaxInvitationsPerRequest(): number;
    getMaxRoomNameChars(): number;
    getMaxRoomsCreatedPerUserLimit(): number;
    getMaxRoomVariablesAllowed(): number;
    getMaxUserIdleTime(): number;
    getMaxUserVariablesAllowed(): number;
    getMinRoomNameChars(): number;
    getName(): string;
    getProperty(key: any): any;
    getPublicGroups(): string[];
    getRoomById(id: number): Room;
    getRoomByName(name: string): Room;
    getRoomList(): Room[];
    getRoomListFromGroup(groupId: string): Room[];
    getRoomManager(): IRoomManager;
    getRoomPersistenceApi(): IRoomStorage;
    getSessionList(): ISession[];
    getSessionsInGroup(groupId: string): ISession[];
    getSessionsListeningToGroup(groupId: string): ISession[];
    getTotalRoomCount(): number;
    getUserById(id: number): User;
    getUserByName(name: string): User;
    getUserBySession(session: ISession): User;
    getUserCount(): number;
    getUserCountChangeUpdateInterval(): number;
    getUserList(): User[];
    getUserManager(): IUserManager;
    getUserReconnectionSeconds(): number;
    getUsersInGroup(groupId: string): User[];
    getZoneManager(): IZoneManager;
    isActive(): boolean;
    isAllowInvitationsOnlyForBuddies(): boolean;
    isClientAllowedToOverridRoomEvents(): boolean;
    isCustomLogin(): boolean;
    isEncrypted(): boolean;
    isFilterBuddyMessages(): boolean;
    isFilterChainInited(): boolean;
    isFilterPrivateMessages(): boolean;
    isFilterRoomNames(): boolean;
    isFilterUserNames(): boolean;
    isForceLogout(): boolean;
    isGeoLocationEnabled(): boolean;
    isGroupEventSet(groupId: string, eventToCheck: SFSRoomEvents): boolean;
    isGuestUserAllowed(): boolean;
    isUploadEnabled(): boolean;
    removeAllUsers(): void;
    removeProperty(key: any): void;
    resetSystemFilterChain(): void;
    setActive(flag: boolean): void;
    setAllowInvitationsOnlyFOrBuddies(allowInvitationsOnlyForBuddies: boolean): void;
    setCLientAllowedToOverridRoomEvents(flag: boolean): void;
    setCustomLogin(flag: boolean): void;
    setDefaultGroups(groupIds: string[]): void;
    setDefaultPlayerIdGeneratorClassName(className: string): void;
    setEncrypted(value: boolean): void;
    setFilterBuddyMessages(flag: boolean): void;
    setFilterPrivateMessages(flag: boolean): void;
    setFilterRoomNames(flag: boolean): void;
    setFilterUserNames(flag: boolean): void;
    setForceLogout(flag: boolean): void;
    setGeoLocationEnabled(value: boolean): void;
    setGuestUserAllowed(flag: boolean): void;
    setGuestUserNamePrefix(prefix: string): void;
    setId(id: number): void;
    setMaxAllowedRooms(max: number): void;
    setMaxAllowedUsers(max: number): void;
    setMaxFailedLogins(value: number): void;
    setMaxInvitationsPerRequest(maxInvitationsPerRequest: number): void;
    setMaxRoomNameChars(max: number): void;
    setMaxRoomsCreatedPerUserLimit(max: number): void;
    setMaxRoomVariablesAllowed(max: number): void;
    setMaxUserIdleTime(seconds: number): void;
    setMaxUserVariablesAllowed(max: number): void;
    setMinRoomNameChars(min: number): void;
    setProperty(key: any, value: any): void;
    setPublicGroups(groupIds: string[]): void;
    setUploadEnabled(val: boolean): void;
    setUserCountCHangeUpdateInterval(interval: number): void;
    setUserReconnectionSeconds(seconds: number): void;
    setZoneManager(manager: IZoneManager): void;
    validateUserName(name: string): void;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/SFSZone.html
 *
 * The Zone represent an application running in the Server, from a simple chat application to a large scale MMO with
 * dozens of games. Each Zone can contain any number of Rooms organized in Room Groups.
 */
declare class SFSZone extends Zone {
    constructor(name: string);
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/db/IDBManager.html */
declare class IDBManager {
    /** Executes a SQL INSERT command returning the key of the inserted row. */
    executeInsert(sql: string, params: any[]): any;

    /** Perform a SQL query and return a structured object based on SFSArray and SFSObject. */
    executeQuery(sql: string, params: any[]): ISFSArray;

    /** Executes a non-query SQL command such as INSERT, UPDATE, DELETE etc... */
    executeUpdate(sql: string, params: any[]): void;

    /** True if the Service is active. */
    isActive(): boolean;
}

/**
 * http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/db/SFSDBManager.html
 *
 * SFSDBManager is the default implementation of the IDBManager interface provided by the SFS2X platform.
 *
 * It manages the connection to a database using either JDBC native drivers or JDBC-ODBC bridge and providing
 * configurable connection pooling for optimal performance and resource usage.
 *
 * Each Zone runs its own DbManager which can be configured via the Zone Configurator module in the SFS2X AdminTool.
 * Additionally a Zone can instantiate multiple DbManagers via server side code. A typical scenario for this is when the
 * application requires to connect to multiple databases.
 */
declare class SFSDBManager extends IDBManager {
    /** Get the number of pooled connections currently active. */
    getActiveConnections(): number;

    /** Get the number of pooled connections currently idle. */
    getIdleConnections(): number;

    /** Get the service name. */
    getName(): string;

    /** Set the service name. */
    setName(name: string): void;
}

declare class IRoomManager {
}

declare class IRoomStorage {
}

declare class IUserManager {
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/bitswarm/sessions/SessionType.html */
declare enum SessionType {
    /** A http tunneled session, not using persistent socket. */
    BLUEBOX,

    /** A default, persistent socket connection, using TCP and UDP protocols. */
    DEFAULT,

    /** A non-network based session. */
    VOID,

    /** Websocket session. */
    WEBSOCKET,
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/bitswarm/sessions/ISession.html */
declare class ISession {
    addDroppedMessages(amount: number): void;
    addReadBytes(amount: number): void;
    addWrittenBytes(amount: number): void;
    close(): void;
    freeze(): void;
    getAddress(): string;
    getClientPort(): number;
    getCreationTime(): number;
    getCryptoKey(): any;
    getDroppedMessages(): number;
    getFreezeTime(): number;
    getFullIpAddress(): string;
    getFullServerIpAddress(): string;
    getHashId(): string;
    getId(): number;
    getLastActivityTime(): number;
    getLastLoggedInActivityTime(): number;
    getLastReadTime(): number;
    getLastWriteTime(): number;
    getMaxIdleTime(): number;
    getMaxLoggedInIdleTime(): number;
    getNodeId(): string;
    getProperty(key: string): any;
    getReadBytes(): number;
    getReconnectionSeconds(): number;
    getServerAddress(): string;
    getServerPort(): number;
    getSessionManager(): ISessionManager;
    getSystemProperty(key: string): any;
    getType(): SessionType;
    getWrittenBytes(): number;
    isConnected(): boolean;
    isEncrypted(): boolean;
    isFrozen(): boolean;
    isIdle(): boolean;
    isLocal(): boolean;
    isLoggedIn(): boolean;
    isMarkedForEviction(): boolean;
    isReconnectionTimeExpired(): boolean;
    isUdpEnabled(): boolean;
    removeProperty(key: string): void;
    removeSystemProperty(key: string): void;
    setConnected(value: boolean): void;
    setCreationTime(timestamp: number): void;
    setCryptoKey(key: any): void;
    setHashId(hash: string): void;
    setId(id: number): void;
    setLastActivityTime(timestamp: number): void;
    setLastLoggedInActivityTime(timestamp: number): void;
    setLastReadTime(timestamp: number): void;
    setLastWriteTime(timestamp: number): void;
    setLoggedIn(value: boolean): void;
    setMarktedForEviction(): void;
    setMaxIdleTime(idleTime: number): void;
    setMaxLoggedInIdleTime(idleTime: number): void;
    setNodeId(nodeId: string): void;
    setProperty(key: string, property: any): void;
    setReconnectionSeconds(value: number): void;
    setSessionManager(manager: ISessionManager): void;
    setSystemProperty(key: string, property: any): void;
    setType(type: SessionType): void;
    unfreeze(): void;
}

declare class ISessionManager {
}

declare class IZoneManager {
}

/** http://docs2x.smartfoxserver.com/api-docs/javadoc/server/com/smartfoxserver/v2/entities/SFSRoomEvents.html */
declare enum SFSRoomEvents {
    /** This event is notified every time a Room password is changed. */
    PASSWORD_STATE_CHANGE,

    /** This event is notified every time the capacity of Room is changed. */
    ROOM_CAPACITY_CHANGE,

    /** This event is notified every time a Room name is changed. */
    ROOM_NAME_CHANGE,

    /** This event is notified every time one or more Variables are modified in the Room. */
    ROOM_VARIABLES_UPDATE,

    /** This event is notified every time when the Room user/spectator count changes. */
    USER_COUNT_CHANGE,
}