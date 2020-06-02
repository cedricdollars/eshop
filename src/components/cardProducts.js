import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'

const CardProducts = () => {
    return (

      <div className="container bg-gray-200">  
        <div className="flex content-start flex-wrap h-48">
            <div className="w-1/3 p-2">
                <Card className=" col-xs-4 p-2">
                    <Image src="../" />
                    <Card.Content>
                        <Card.Header>
                            Chaise
                        </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
           
                        <button>
                            <Icon name="add to cart" />
                            125.99€
                        </button>
                    </Card.Content>
                </Card>
            </div>
            <div className="w-1/3 p-2">
                <Card className="col-xs-4  p-2">
                    <Image src="../../static/assets/article-2.png" />
                    <Card.Content>
                        <Card.Header>
                            Chaise
                        </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <button>
                            <Icon name="add to cart" />
                            125.99€
                        </button>
                    </Card.Content>
                </Card>
            </div>
            <div className="w-1/3 p-2">
                <Card className="col-xs-4 p-2">
                    <Image src="../../static/assets/article-3.png" />
                    <Card.Content>
                        <Card.Header>
                            Chaise
                        </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <button>
                            <Icon name="add to cart" />
                            125.99€
                        </button>
                    </Card.Content>
                </Card>
            </div>
        </div>
    </div> 
    )
}

export default CardProducts