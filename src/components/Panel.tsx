import { useNavigate } from "react-router";
import { actions, state } from "../support/types";

export const Panel = ({ state, dispatch, month }: { state: state; dispatch: React.Dispatch<actions>; month: string }) => {
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "logout" });
    navigate("/");
  };

  return (
    <div className="flex-1 h-full p-1 lg:p-3 lg:pl-0 text-2xl ">
      <div className="sm:w-full h-full  p-2 flex flex-col" id="calendar-container">
        <h1 className="mx-auto">{month}</h1>
        <div className="flex justify-between">
          <img src={require("../images/right.png")} alt="" className="w-10 rotate-180" onClick={() => dispatch({ type: "change-month", action: "decrease" })} />
          <img src={require("../images/right.png")} alt="" className="w-10" onClick={() => dispatch({ type: "change-month", action: "increase" })} />
        </div>

        <div className=" m-2">
          <div className="flex justify-between flex-col">
            <div className="">
              <label htmlFor="">day:</label>
              <input type="text" className="border-b-2 border-black outline-none w-full text-center" readOnly value={state.form.day} />
            </div>

            <div className="">
              <label htmlFor="">month:</label>
              <input type="text" className="border-b-2 border-black outline-none w-full text-center" readOnly value={state.form.month} />
            </div>
          </div>

          <div className="flex justify-between flex-wrap">
            <div className="">
              <label htmlFor="">from:</label>
              <div className="flex">
                <input type="number" onClick={() => dispatch({ type: "focus", id: 0 })} className="border-b-2 border-black outline-none w-14 text-center" name="fromHours" onChange={(e) => dispatch({ type: "input", name: e.target.name, value: e.target.value })} value={state.form.inputs.fromHours} />
                :
                <input type="number" onClick={() => dispatch({ type: "focus", id: 1 })} className="border-b-2 border-black outline-none w-14 text-center" name="fromMinutes" onChange={(e) => dispatch({ type: "input", name: e.target.name, value: e.target.value })} value={state.form.inputs.fromMinutes} />
              </div>
            </div>

            <div className="">
              <label htmlFor="">to:</label>
              <div className="flex">
                <input type="number" onClick={() => dispatch({ type: "focus", id: 2 })} className="border-b-2 border-black outline-none w-14 text-center" name="toHours" onChange={(e) => dispatch({ type: "input", name: e.target.name, value: e.target.value })} value={state.form.inputs.toHours} />
                :
                <input type="number" onClick={() => dispatch({ type: "focus", id: 3 })} className="border-b-2 border-black outline-none w-14 text-center" name="toMinutes" onChange={(e) => dispatch({ type: "input", name: e.target.name, value: e.target.value })} value={state.form.inputs.toMinutes} />
              </div>
            </div>
          </div>

          <div className="w-full flex">
            <button onClick={() => dispatch({ type: "submit" })} className="transition-all hover:scale-105 bg-blue-400 px-2 py-1 mt-2 mx-auto rounded-2xl">
              submit
            </button>
          </div>
        </div>
        {state.message.length > 0 && <p data-cy="message" className="text-red-500" style={{fontSize: "17px", lineHeight: "17px", letterSpacing: "1.3px"}}>{state.message}</p>}

        <div className="flex mt-auto flex-col text-lg text-center">
          <img src={state.user.photo} alt="" className="rounded-full w-16 mx-auto my-2" />
          <p>{state.user.name}</p><hr />
          <div>
            <p className="cursor-pointer" onClick={() => dispatch({ type: "administration" })}>Administration</p>
          </div><hr />
          <p className="cursor-pointer" onClick={logout}>Logout</p>
        </div>
      </div>
    </div>
  );
};
