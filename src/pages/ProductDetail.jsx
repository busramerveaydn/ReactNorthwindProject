import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductServices from '../services/productService'


export default function ProductDetail() {

    let { name } = useParams()

    const [product, setProduct] = useState({})
    
    useEffect(()=>{
        let productService = new ProductServices()
        productService.getByProductName(name).then(result=>setProduct(result.data.data))
    },[])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                        </Button>
                            <Button basic color='red'>
                                Favorilere Ekle
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
                
            </Card.Group>
        </div>
    )
}
