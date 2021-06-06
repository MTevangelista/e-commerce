import React from "react"

import './styles.css'

const PageHeader = () => {

    let imageURL = "https://s3-alpha-sig.figma.com/img/a7f4/20c6/b8858dbcafa27119e01012e035cfd82c?Expires=1623628800&Signature=SbmdE8xjEyzVEvAIb91ENGHtjOet9u~Bgr6~LF0TetiB~KYaakWmIGIVCYgeE6FQI8mc0BEX8OaGUr~LzpQvWrs0KRprGqX2fxOxTBp-8ORF2dBkeyVqi~TDK1c6M7Cr6KPDH-Kz09wXaOIBYujIJz4OZ~~caPjBXj~QS32y-kx9KRn1nZEOZMxNfrdEO3xBU9VuhHq8GrKJtkbQixi23gd8NQZ53ajAHLYIr2eSt-1zJr-j~3cA9dT29O95~8RwkK~EtAsY3mriExt~nDCEJEwq2esp46bvONEntnmzfiV0~XWU3uwskZjKVKv0M1Pw6jHMzzpgM86e9UX6ZAtjKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

    let imageURL2 = "https://s3-alpha-sig.figma.com/img/f3ce/1a22/b4e3ec6b46e4605f78d32ea72ad8548e?Expires=1623628800&Signature=JdbwB~5RvHTj7oNTWs8OX3n8p-LMfXrtVWklh-Cc7vJQoCJlmyZzYwsdakvbZ9mYPmCskL6gDcASVpMgqU0DZIZiGuJATJOEQkyb-RGcot6tNltVUWOmHfkCnn9HGubF-Cu6p7870xh0FkgiKBkD9jZ7VSoCgxJfXKBMjoHk542rUIz8S21BfW0kejTGI1~K1zvogOHk2CVnt8J8mZwfm3uRt9GJifAFGiTc9pdBnPde540mylAQN5DIAnnzn~U1jpmWcuba0tg~ZkRq5XBlpfbS77ttQOap2RVr6OSFXvs0PshQn3T2LzqMclOXEQL-nJMji8JuRztYmsNUiqrpWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

    let imageURL3 = "https://s3-alpha-sig.figma.com/img/c236/e3a7/1e717300352ec4d1319b0a0ac9f20802?Expires=1623628800&Signature=NupSxm~sDcu292HpjphRHf9jW-dWOImKS3rRdBMBCLlnPDfKgyheQ7FB7~CmXEEjnQalzlwF5Uk-uOoAMq1W7tTDTvOMeSZnme3VHwTRlShlJjv2XAMoXQJYRdbvk5sDw0COdgnzQLKPU0a1LAZqb2cY3DH8l8~oEz9KSBPpEXnAmT9tgmzHKRInJp8l2ezQOj9bM9A-sBUo1feqNx-DKX2eU3PeiIBXnMxMHscHj4PppYBPiW66ovM1q3EhSy0G3CKHipe7tM4ySfdjJVqBjwkr-I5FZPPp5AqYJfxPdws64WqnA7SOrGfQu98qecqPDzrheL7oOLwIzjsQEsynuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

    return (
        <div>
            <header className="header">
                <div>
                    <img src={imageURL} alt="foto1" />
                </div>
                <div>
                    <img className="center-img" src={imageURL2} alt="foto1" />
                </div>
                <div>
                    <img src={imageURL3} alt="foto1" />
                </div>           
            </header>
        </div>
    )
}  

export default PageHeader