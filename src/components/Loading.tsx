const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-primary"></div>
      </div>
    </div>
  );
};

export default Loading;
