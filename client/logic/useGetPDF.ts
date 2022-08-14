const useGetPDF = () => {
  // const [data, setData] = useState(null);
  // console.log(data);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data }: any = await axios
  //       .get("http://localhost:8000/archive", {
  //         responseType: "arraybuffer",
  //       })
  //       .catch((e) => {
  //         // エラー処理
  //         console.log("エラー発生");
  //         console.log(e.message);
  //       });
  //     if (data) {
  //       const blob = new Blob([data], { type: "application/zip" });
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "製品資料.zip");
  //       link.click();
  //       link.parentNode?.removeChild;
  //       console.log(data);
  //       console.log(blob);
  //       console.log(url);
  //       console.log(link);
  //     }
  //   };
  //   fetch();
  // }, []);
};

export default useGetPDF;
