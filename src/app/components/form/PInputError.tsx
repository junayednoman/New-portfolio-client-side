const PInputError = ({ message }: { message: string }) => {
  return (
    <p
      style={{ color: "red", marginTop: "5px" }}
      className="font-normal capitalize"
    >
      {message}
    </p>
  );
};

export default PInputError;
