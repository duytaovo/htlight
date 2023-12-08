interface Props {
  DataConnectedCarSharingHome: any[];
  className?: string;
}
const ConnectedCarSharing: React.FC<Props> = ({
  DataConnectedCarSharingHome,
  className,
}) => {
  return (
    <div className={className}>
      <div className="w-full flex-col max-w-[1272px] self-center items-stretch px-auto flex">
        <div className="w-full flex-col mx-auto flex items-center">
          <div className="w-full max-w-[1272px] flex-col justify-center mt-auto mx-auto p-[10px_36px] flex h-40">
            <div className="w-full max-w-[1072px] justify-around items-center flex md:flex-wrap md:w-[80%] md:mx-auto">
              {DataConnectedCarSharingHome.map((item: any, index: number) => (
                <div key={index} className="flex">
                  <div className="text-center flex-col justify-start items-center flex sm:w-[40%]">
                    <div className="mb-1 text-[32px] font-bold text-black sm:text-[20px]">
                      {DataConnectedCarSharingHome?.[index]?.total}
                    </div>

                    <div className="text-[13px] font-bold text-black sm:text-[10px]">
                      {DataConnectedCarSharingHome?.[index]?.title}
                    </div>
                  </div>
                  {index === DataConnectedCarSharingHome.length - 1 ? (
                    <></>
                  ) : (
                    <div className="w-[1px] h-16 bg-[#c9c9c9] self-strech ml-16 md:hidden my-auto  mx-auto"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedCarSharing;

