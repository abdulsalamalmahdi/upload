function HomePage({data}) {
    return <div>Welcome to Next.js!{data.text}</div>
  }
  

  export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    const data = {text:"djflkdjlfjldfj"}
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
 
  export default HomePage