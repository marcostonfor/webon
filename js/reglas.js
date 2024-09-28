export function reglas() {
    return /* css */ `
        <style>
            .sidenav {
          height: 75%;
          width: 0;
          margin: 10% auto;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #666;
          overflow-x: hidden;
          overflow-y: scroll;
          transition: 0.5s;
          padding-top: 60px;
        }

        .sidenav a {
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }

        .sidenav a:hover {
          color: #f1f1f1;
        }

        .sidenav .closebtn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
        }

        #main {
          transition: margin-left .5s;
          padding: 16px;
        }

        @media screen and (max-height: 350px) {
          .sidenav {padding-top: 15px;}
          .sidenav a {font-size: 18px;}
        }
        </style>
    `;
}