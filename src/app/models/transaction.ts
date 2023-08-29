export interface ITransaction {
  Model: {
    ReasonCode: number;
    PublicId: string;
    TerminalUrl: string;
    TransactionId: number;
    Amount: number;
    Currency: string;
    CurrencyCode: number;
    PaymentAmount: number;
    PaymentCurrency: string;
    PaymentCurrencyCode: number;
    InvoiceId: string | null;
    AccountId: string | null;
    Email: string | null;
    Description: string;
    JsonData: string;
    CreatedDate: string;
    PayoutDate: string | null;
    PayoutDateIso: string | null;
    PayoutAmount: number | null;
    CreatedDateIso: string;
    AuthDate: string;
    AuthDateIso: string;
    ConfirmDate: string;
    ConfirmDateIso: string;
    AuthCode: string;
    TestMode: boolean;
    Rrn: number | null;
    OriginalTransactionId: number | null;
    FallBackScenarioDeclinedTransactionId: number | null;
    IpAddress: string;
    IpCountry: string;
    IpCity: string;
    IpRegion: string;
    IpDistrict: string;
    IpLatitude: number;
    IpLongitude: number;
    CardFirstSix: string;
    CardLastFour: string;
    CardExpDate: string;
    CardType: string;
    CardProduct: string;
    CardCategory: string;
    EscrowAccumulationId: number | null;
    IssuerBankCountry: string;
    Issuer: string;
    CardTypeCode: number;
    Status: string;
    StatusCode: number;
    CultureName: string;
    Reason: string;
    CardHolderMessage: string;
    Type: number;
    Refunded: boolean;
    Name: string;
    Token: string;
    SubscriptionId: string | null;
    GatewayName: string;
    ApplePay: boolean;
    AndroidPay: boolean;
    WalletType: string;
    TotalFee: number;
  };
  Success: boolean;
  Message: string | null;
}