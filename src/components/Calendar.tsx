import { actions, state } from "../support/types";

export const Calendar = ({ state, dispatch }: { state: state,  dispatch: React.Dispatch<actions> }) => {
  const columnStart = {
    gridColumnStart: new Date(new Date().getFullYear() - 1, state.monthCount, 1).getDay().toString() === "0" ? "7" : new Date(new Date().getFullYear() - 1, state.monthCount, 1).getDay().toString(),
  };
  
  return (
    <div className="lg:w-3/4 w-full lg:h-full min-h-0 lg:p-10 p-1">
      <div className="w-full h-full rounded-3xl flex flex-col lg:grid grid-rows-5 grid-cols-7 overflow-scroll lg:overflow-hidden bg-slate-300 gap-1" id="calendar-container">
        {[...Array(new Date(new Date().getFullYear() - 1, state.monthCount + 1, 0).getDate())].map((undef, i) => {
          return (
            <div key={i + 1} onClick={()=>dispatch({type: "auto-input", day: i+1, month: state.monthCount})} style={i === 0 ? columnStart : {}} className={`${i + 1 === new Date().getDate() && new Date().getMonth() + 12 === state.monthCount && "border-b-8 border-red-500"} bg-white p-2 `}>
              <p>{i + 1}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
