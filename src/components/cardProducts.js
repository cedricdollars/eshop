import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'

const CardProducts = () => {
    return (
        <div className="container fluid bg-dark-gray">
            <div className="row">
                <Card className="col-xs-4 col-sm-4">
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
                <Card className="col-xs-4 col-sm-4">
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
                <Card className="col-xs-4 col-sm-4">
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
       
    )
}

export default CardProducts