import React from "react";

const SeeDeatailesEvalution = ({ isOpen, onClose, singleCohort }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] max-h-[90vh] overflow-y-auto rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 shadow-2xl p-8">
        <div className="flex items-center font-sans text-2xl font-semibold text-blue-gray-900">
          Cohort details
        </div>
        <div className="mt-5">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Cohort name</td>
                <td>{singleCohort?.name || "-"}</td>
              </tr>
              
              <tr>
                <td className="py-2 font-semibold">Participants</td>
                <td>
                  {singleCohort?.participants?.map((el, index1) => {
                    return (
                      <div>{index1+1}. {el?.name}</div>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 text-blue-gray-500">
          <button
            onClick={onClose}
            className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg hover:bg-red-500/10 active:bg-red-500/30  border border-red-300"
          >
            Close
          </button>
          {/* <button
            onClick={onClose}
            className="rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
          >
            Confirm
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SeeDeatailesEvalution;
