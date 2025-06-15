import dotenv from "dotenv";
import UnifyPaymentGatewayClient, {
  CurrencyEnum,
  IOrderCreatePayload,
  EnvironmentEnum,
  ICustomer,
  ICustomerBankPayload,
  ICustomerBankResponse,
  ICustomerCreatePayload,
  ICustomerListResponse,
  ICustomerResponse,
  ICustomerUpdatePayload,
  IOrder,
  IOrderListResponse,
  IOrderPaymentListResponse,
  IOrderPaymentResponse,
  IOrderQuery,
  IOrderResponse,
  IPayment,
  IUnifyPaymentGatewayConfigOptions,
  ProviderTypes,
  IOrderPaymentPayUResponse,
} from "unify-payment-gateway";


dotenv.config();

const gateway = new UnifyPaymentGatewayClient({
  provider: ProviderTypes.PAYU,
  clientId: process.env.PAYU_MERCHANT_KEY || "",
  salt: process.env.PAYU_SALT || "",
});

export const payuCreateOrder = async () => {
  const payload: IOrderCreatePayload = {
    amount: 500,
    currency: CurrencyEnum.INR,
    email: "test@gmail.com",
    phone: "1234567890",
    name: "Test User",
    product_info: "Test Product",
    txn_id: "txn_1234567890",
    notes: {}
  };
  const order: IOrderPaymentPayUResponse = await gateway.order.createOrder(payload);
  console.log(order, "Payu Order created successfully");
};