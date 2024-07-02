import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPFrom";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ data });
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { handleSubmit, register, getValues } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            otpResponse={otpResponse}
            onReSendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
