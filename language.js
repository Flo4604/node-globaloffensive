// This file contains representations of message IDs

module.exports = {
	// ESOMsg
	SO_Create: 21,
	SO_Update: 22,
	SO_Destroy: 23,
	SO_CacheSubscribed: 24,
	SO_CacheUnsubscribed: 25,
	SO_UpdateMultiple: 26,
	SO_CacheSubscriptionCheck: 27,
	SO_CacheSubscriptionRefresh: 28,

	// EGCItemMsg
	Base: 1000,
	SetItemPosition: 1001,
	Craft: 1002,
	CraftResponse: 1003,
	Delete: 1004,
	VerifyCacheSubscription: 1005,
	NameItem: 1006,
	UnlockCrate: 1007,
	UnlockCrateResponse: 1008,
	PaintItem: 1009,
	PaintItemResponse: 1010,
	GoldenWrenchBroadcast: 1011,
	MOTDRequest: 1012,
	MOTDRequestResponse: 1013,
	AddItemToSocket_DEPRECATED: 1014,
	AddItemToSocketResponse_DEPRECATED: 1015,
	AddSocketToBaseItem_DEPRECATED: 1016,
	AddSocketToItem_DEPRECATED: 1017,
	AddSocketToItemResponse_DEPRECATED: 1018,
	NameBaseItem: 1019,
	NameBaseItemResponse: 1020,
	RemoveSocketItem_DEPRECATED: 1021,
	RemoveSocketItemResponse_DEPRECATED: 1022,
	CustomizeItemTexture: 1023,
	CustomizeItemTextureResponse: 1024,
	UseItemRequest: 1025,
	UseItemResponse: 1026,
	GiftedItems_DEPRECATED: 1027,
	RemoveItemName: 1030,
	RemoveItemPaint: 1031,
	GiftWrapItem: 1032,
	GiftWrapItemResponse: 1033,
	DeliverGift: 1034,
	DeliverGiftResponseGiver: 1035,
	DeliverGiftResponseReceiver: 1036,
	UnwrapGiftRequest: 1037,
	UnwrapGiftResponse: 1038,
	SetItemStyle: 1039,
	UsedClaimCodeItem: 1040,
	SortItems: 1041,
	RevolvingLootList_DEPRECATED: 1042,
	LookupAccount: 1043,
	LookupAccountResponse: 1044,
	LookupAccountName: 1045,
	LookupAccountNameResponse: 1046,
	UpdateItemSchema: 1049,
	RemoveCustomTexture: 1051,
	RemoveCustomTextureResponse: 1052,
	RemoveMakersMark: 1053,
	RemoveMakersMarkResponse: 1054,
	RemoveUniqueCraftIndex: 1055,
	RemoveUniqueCraftIndexResponse: 1056,
	SaxxyBroadcast: 1057,
	BackpackSortFinished: 1058,
	AdjustItemEquippedState: 1059,
	CollectItem: 1061,
	ItemAcknowledged__DEPRECATED: 1062,
	Presets_SelectPresetForClass: 1063,
	Presets_SetItemPosition: 1064,
	ReportAbuse: 1065,
	ReportAbuseResponse: 1066,
	Presets_SelectPresetForClassReply: 1067,
	NameItemNotification: 1068,
	ApplyConsumableEffects: 1069,
	ConsumableExhausted: 1070,
	ShowItemsPickedUp: 1071,
	ClientDisplayNotification: 1072,
	ApplyStrangePart: 1073,
	IncrementKillCountAttribute: 1074,
	IncrementKillCountResponse: 1075,
	ApplyPennantUpgrade: 1076,
	SetItemPositions: 1077,
	ApplyEggEssence: 1078,
	NameEggEssenceResponse: 1079,
	PaintKitItem: 1080,
	PaintKitBaseItem: 1081,
	PaintKitItemResponse: 1082,
	GiftedItems: 1083,
	UnlockItemStyle: 1084,
	UnlockItemStyleResponse: 1085,
	ApplySticker: 1086,
	ItemAcknowledged: 1087,
	StatTrakSwap: 1088,
	UserTrackTimePlayedConsecutively: 1089,
	ItemCustomizationNotification: 1090,
	ModifyItemAttribute: 1091,
	CasketItemAdd: 1092,
	CasketItemExtract: 1093,
	CasketItemLoadContents: 1094,
	TradingBase: 1500,
	Trading_InitiateTradeRequest: 1501,
	Trading_InitiateTradeResponse: 1502,
	Trading_StartSession: 1503,
	Trading_SetItem: 1504,
	Trading_RemoveItem: 1505,
	Trading_UpdateTradeInfo: 1506,
	Trading_SetReadiness: 1507,
	Trading_ReadinessResponse: 1508,
	Trading_SessionClosed: 1509,
	Trading_CancelSession: 1510,
	Trading_TradeChatMsg: 1511,
	Trading_ConfirmOffer: 1512,
	Trading_TradeTypingChatMsg: 1513,
	ServerBrowser_FavoriteServer: 1601,
	ServerBrowser_BlacklistServer: 1602,
	ServerRentalsBase: 1700,
	ItemPreviewCheckStatus: 1701,
	ItemPreviewStatusResponse: 1702,
	ItemPreviewRequest: 1703,
	ItemPreviewRequestResponse: 1704,
	ItemPreviewExpire: 1705,
	ItemPreviewExpireNotification: 1706,
	ItemPreviewItemBoughtNotification: 1707,
	Dev_NewItemRequest: 2001,
	Dev_NewItemRequestResponse: 2002,
	Dev_PaintKitDropItem: 2003,
	StoreGetUserData: 2500,
	StoreGetUserDataResponse: 2501,
	StorePurchaseInit_DEPRECATED: 2502,
	StorePurchaseInitResponse_DEPRECATED: 2503,
	StorePurchaseFinalize: 2504,
	StorePurchaseFinalizeResponse: 2505,
	StorePurchaseCancel: 2506,
	StorePurchaseCancelResponse: 2507,
	StorePurchaseQueryTxn: 2508,
	StorePurchaseQueryTxnResponse: 2509,
	StorePurchaseInit: 2510,
	StorePurchaseInitResponse: 2511,
	BannedWordListRequest: 2512,
	BannedWordListResponse: 2513,
	GCToGCBannedWordListBroadcast: 2514,
	GCToGCBannedWordListUpdated: 2515,
	GCToGCDirtySDOCache: 2516,
	GCToGCDirtyMultipleSDOCache: 2517,
	GCToGCUpdateSQLKeyValue: 2518,
	GCToGCIsTrustedServer: 2519,
	GCToGCIsTrustedServerResponse: 2520,
	GCToGCBroadcastConsoleCommand: 2521,
	ServerVersionUpdated: 2522,
	ApplyAutograph: 2523,
	GCToGCWebAPIAccountChanged: 2524,
	RequestAnnouncements: 2525,
	RequestAnnouncementsResponse: 2526,
	RequestPassportItemGrant: 2527,
	ClientVersionUpdated: 2528,

	// EGCBaseClientMsg
	ClientWelcome: 4004,
	ServerWelcome: 4005,
	ClientHello: 4006,
	ServerHello: 4007,
	ClientConnectionStatus: 4009,
	ServerConnectionStatus: 4010,

	// ECsgoGCMsg
	Base: 9100,
	MatchmakingStart: 9101,
	MatchmakingStop: 9102,
	MatchmakingClient2ServerPing: 9103,
	MatchmakingGC2ClientUpdate: 9104,
	MatchmakingGC2ServerReserve: 9105,
	MatchmakingServerReservationResponse: 9106,
	MatchmakingGC2ClientReserve: 9107,
	MatchmakingServerRoundStats: 9108,
	MatchmakingClient2GCHello: 9109,
	MatchmakingGC2ClientHello: 9110,
	MatchmakingServerMatchEnd: 9111,
	MatchmakingGC2ClientAbandon: 9112,
	MatchmakingServer2GCKick: 9113,
	MatchmakingGC2ServerConfirm: 9114,
	MatchmakingGCOperationalStats: 9115,
	MatchmakingGC2ServerRankUpdate: 9116,
	MatchmakingOperator2GCBlogUpdate: 9117,
	ServerNotificationForUserPenalty: 9118,
	ClientReportPlayer: 9119,
	ClientReportServer: 9120,
	ClientCommendPlayer: 9121,
	ClientReportResponse: 9122,
	ClientCommendPlayerQuery: 9123,
	ClientCommendPlayerQueryResponse: 9124,
	WatchInfoUsers: 9126,
	ClientRequestPlayersProfile: 9127,
	PlayersProfile: 9128,
	SetMyMedalsInfo: 9129,
	PlayerEarnedRewardNotification: 9130,
	PlayerOverwatchCaseUpdate: 9131,
	PlayerOverwatchCaseAssignment: 9132,
	PlayerOverwatchCaseStatus: 9133,
	GC2ClientTextMsg: 9134,
	Client2GCTextMsg: 9135,
	MatchEndRunRewardDrops: 9136,
	MatchEndRewardDropsNotification: 9137,
	ClientRequestWatchInfoFriends2: 9138,
	MatchList: 9139,
	MatchListRequestCurrentLiveGames: 9140,
	MatchListRequestRecentUserGames: 9141,
	GC2ServerReservationUpdate: 9142,
	ClientVarValueNotificationInfo: 9144,
	TournamentMatchRewardDropsNotification: 9145,
	MatchListRequestTournamentGames: 9146,
	MatchListRequestFullGameInfo: 9147,
	GiftsLeaderboardRequest: 9148,
	GiftsLeaderboardResponse: 9149,
	ServerVarValueNotificationInfo: 9150,
	ClientSubmitSurveyVote: 9152,
	Server2GCClientValidate: 9153,
	MatchListRequestLiveGameForUser: 9154,
	Server2GCPureServerValidationFailure: 9155,
	Client2GCEconPreviewDataBlockRequest: 9156,
	Client2GCEconPreviewDataBlockResponse: 9157,
	AccountPrivacySettings: 9158,
	SetMyActivityInfo: 9159,
	MatchListRequestTournamentPredictions: 9160,
	MatchListUploadTournamentPredictions: 9161,
	DraftSummary: 9162,
	ClientRequestJoinFriendData: 9163,
	ClientRequestJoinServerData: 9164,
	ClientRequestNewMission: 9165,
	GC2ClientTournamentInfo: 9167,
	GlobalGame_Subscribe: 9168,
	GlobalGame_Unsubscribe: 9169,
	GlobalGame_Play: 9170,
	AcknowledgePenalty: 9171,
	Client2GCRequestPrestigeCoin: 9172,
	GC2ClientGlobalStats: 9173,
	Client2GCStreamUnlock: 9174,
	FantasyRequestClientData: 9175,
	FantasyUpdateClientData: 9176,
	GCToClientSteamdatagramTicket: 9177,
	ClientToGCRequestTicket: 9178,
	ClientToGCRequestElevate: 9179,
	GlobalChat: 9180,
	GlobalChat_Subscribe: 9181,
	GlobalChat_Unsubscribe: 9182,
	ClientAuthKeyCode: 9183,
	GotvSyncPacket: 9184,
	ClientPlayerDecalSign: 9185,
	ClientLogonFatalError: 9187,
	ClientPollState: 9188,
	Party_Register: 9189,
	Party_Unregister: 9190,
	Party_Search: 9191,
	Party_Invite: 9192,
	Account_RequestCoPlays: 9193,
	ClientGCRankUpdate: 9194,
	ClientRequestOffers: 9195,
	ClientAccountBalance: 9196,
	ClientPartyJoinRelay: 9197,
	ClientPartyWarning: 9198,
	SetEventFavorite: 9200,
	GetEventFavorites_Request: 9201,
	ClientPerfReport: 9202,
	GetEventFavorites_Response: 9203,
	ClientRequestSouvenir: 9204,
	ClientReportValidation: 9205,
	GC2ClientRefuseSecureMode: 9206,
	GC2ClientRequestValidation: 9207,
	ClientRedeemMissionReward: 9209,
	ClientDeepStats: 9210,
	StartAgreementSessionInGame: 9211,
	GC2ClientInitSystem: 9212,
	GC2ClientInitSystem_Response: 9213,
	PrivateQueues: 9214,
	MatchListTournamentOperatorMgmt: 9215,
};
