import express from "express";
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
} from "unify-payment-gateway";

dotenv.config();

const gateway = new UnifyPaymentGatewayClient({
  provider: "razorpay",
  clientId: process.env.RAZORPAY_KEY_ID || "",
  clientSecret: process.env.RAZORPAY_KEY_SECRET || "",
});

const initFunction = async () => {
  const payload: IOrderCreatePayload = {
    amount: 1000, // Amount in paise
    currency: CurrencyEnum.INR,
    receipt: "receipt#1",
    notes: {
      note_key_1: "value3",
      note_key_2: "value2",
    },
  };
  const order = await gateway.order.createOrder(payload);
  console.log(order, "Order created successfully");
};

initFunction();
