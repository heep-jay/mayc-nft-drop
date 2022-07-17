interface Image {
    asset:{
        url:string
    }
}

export interface Creator {
    _id: string
    name: string
    address: string
    slug:{
        current: string
    }
    image: Image
    bio: string
}

export interface Collection{
    _id: string
    name: string
    title: address
    address: string
    _type: string
    slug:{
        current: string
    }
    nftCollectionName: string
    previewImage: Image
    mainImage: Image
    creator: Creator
}