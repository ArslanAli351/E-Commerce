export default function Login() {
  return (
    <>
      <div className="main1 ">
        <h1 className="center font_2 mt-5 absolute w-full ">Login page</h1>
        <div class=" center min-h-[100vh] ">
          <div class="display h-[600px] w-[360px] mt-16 relative  ">
            <div class=" relative h-full z-10">
              <form class=" w-80 p-8 pt-[156px] ">
                <div class=" p-[20px] pr-0 pl-0 relative">
                  <input
                    type="text"
                    class="login__input border-b-4 bg-none pl-6 w-[75%] p-[10px] font-bold	transition-[.2s]"
                    placeholder=" Email"
                  />
                </div>
                <div class="p-[20px] pr-0 pl-0 relative">
                  <input
                    type="password"
                    class="login__input border-b-4 bg-none pl-6 w-[75%] p-[10px] font-bold	transition-[.2s]"
                    placeholder="Password"
                  />
                </div>
                <button class="button submit_button text-sm mt-[30px] p-[16px]  rounded-[26px] font-bold flex align-center w-full transition-[.2s] cursor-pointer	 text-[#9d4848] bg-[#fff] uppercase border border-[#D4D3E8]		">
                  <span class="button__text">Log In Now</span>
                </button>
              </form>
            </div>
            <div class="background_screen absolute">
              <span class="rotate-45 absolute h-[400px] w-[200px] mt-[420px] mr-[50px] bg-[#b97b7b] rounded-[60px]  __background__shape4"></span>
              <span class="rotate-45 absolute  h-[540px] w-[190px] -mt-6 mr-0 rounded-[32px] shape3"></span>
              <span class="rotate-45 absolute  h-[220] w-[220px] -mt[172px] mr-0 rounded-[32px] bg-[#ac6363] screen__background__shape2"></span>
              <span class="rotate-45 absolute h-[520px] w-[520px] -mt-[50px] bg-white shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
