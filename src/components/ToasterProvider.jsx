import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        className:
          "bg-cyan-300 text-blue-900 shadow-lg border border-blue-200 px-4 rounded-xl font-medium",
        duration: 3000,
        success: {
          className: "bg-cyan-300 text-green-900 border border-green-300",
          iconTheme: {
            primary: "#22c55e",
            secondary: "#ecfdf5",
          },
        },
        error: {
          className: "bg-cyan-300 text-red-900 border border-red-300",
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fef2f2",
          },
        },
      }}
      containerStyle={{
        marginTop: "-0.7rem",
      }}
    />
  );
};

export default ToasterProvider;
