
See https://getbootstrap.com/docs/4.4/utilities for more information

Every class (well almost) in this library is based upon this tag. So, when using a **Table**, **Propover** or a **Container** you may also use the **Tag** properies.

The **Tag** has a number of properties that map to Bootstrap class names.
For instance all the **.text-left**, **.text-right**, **.text-center** may be written as **text={value}** as tag properties.

The following code

```html static
<Tag text="left">
    Hello
</Tag>
```

Will generate the this Bootstrap code

```html static
<div class="text-left">
    Hello
</div>
```

To change the **div** into a **span** use the **tag** property.

```html static
<Tag tag="span" text="left">
    Hello
</Tag>
```

This **text** property is valid for all Bootstrap **.text-what-ever** class names.
If you need to use several class names which start with **text-** the **text** property 
may also be an array or a space separated string.


```html static
<Tag tag="span" text="uppercase warning"}>
    Hello
</Tag>
```

This generates the following.

```html static
<span class="text-uppercase text-warning">
    Hello
</span>
```


### Vertical alignment

Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.

Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.

Choose from **baseline**, **top**, **middle**, **bottom**, **text-bottom**, and **text-top** as needed.

```js
import {Container, Table, Row, Col} from 'react-bootify';

<Container>
    <Table style={{height:'6em'}}>
        <Table.Body>
            <Table.Row>
                <Table.Col align='baseline'>baseline</Table.Col>
                <Table.Col align='top'>top</Table.Col>
                <Table.Col align='middle'>middle</Table.Col>
                <Table.Col align='bottom'>bottom</Table.Col>
                <Table.Col align='text-top'>text-top</Table.Col>
                <Table.Col align='text-bottom'>text-bottom</Table.Col>
            </Table.Row>
        </Table.Body>
    </Table>

</Container>

```


### Aligning items at top right

This is using the Bootstrap classes **align-items-start** and **justify-content-end**.


```js

import {Button} from 'react-bootify';

var props = {color:'primary', margin:{x:1}};

<Tag border={props.color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='start' justifyContent={{sm:'end', lg:'start'}} padding={2} >
    <Button {...props}>
        Pax vobiscum
    </Button>
    <Button {...props}>
        Nosa dostra
    </Button>
    <Button {...props}>
        Quantala predum
    </Button>
</Tag>

```


### Aligning items at bottom left

This is using the Bootstrap classes **align-items-end** and **justify-content-start**.

```js

import {Button} from 'react-bootify';

var color = 'danger';

<Tag border={color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='end' justifyContent='start' padding={2} >
    <Button color={color} margin={{x:1}}>
        Pax vobiscum
    </Button>
    <Button color={color} margin={{x:1}}>
        Nosa dostra
    </Button>
    <Button color={color} margin={{x:1}}>
        Quantala predum
    </Button>
</Tag>

```

### Aligning items centered

This is using the Bootstrap classes **align-items-center** and **justify-content-center**.


```js

import {Button} from 'react-bootify';

var color = 'secondary';

<Tag border={color} rounded={true} style={{height:'6rem'}} display='flex' alignItems='center' justifyContent='center' padding={2} >
    <Button color={color}  margin={{x:1}}>
        Pax vobiscum
    </Button>
    <Button color={color}  margin={{x:1}}>
        Nosa dostra
    </Button>
    <Button color={color}  margin={{x:1}}>
        Quantala predum
    </Button>
</Tag>

```


### Example of borders

Here is an example of different border styles, padding, margin and colors.

```js

<Tag border='primary' rounded={true} text='light' bg='info' padding={{left:3, right:3, bottom:2, top:2}}>
    Primary border, rounded borders, light text color, info background color and some padding 
</Tag>
<hr/>
<Tag border='dark' rounded='top' bg='light' padding={2}>
    Dark border, rounded top, light background color, padding 2
</Tag>
<hr/>
<Tag border='warning' padding={{left:3, right:3}} rounded margin={2}>
    Border warning, left and right padding 3 and rounded corners.
</Tag>
<hr/>

<Tag border='secondary' padding={3} text='right' bg='light'>
    Border secondary, padding 3 and text aligned right.
</Tag>
<hr/>


```

### Shadows

```js

<Tag shadow="none" rounded={true} border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    No shadow
</Tag>

<Tag shadow="sm" rounded="sm" border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Small shadow
</Tag>

<Tag shadow rounded border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Default shadow
</Tag>

<Tag shadow="lg" rounded="lg" border='muted' margin={2} padding={{left:4, right:4, y:2}}>
    Large shadow
</Tag>


```


### Rounded


```js

var style = {width:'4em', height:'4em'};
var props = {margin:{top:1, bottom:1, right:1, left:1}, display:'inline-block', bg:'info', border:'dark', style:style};

<Tag alignItems='baseline' display='inline'>
    <Tag  rounded='sm' {...props}></Tag>
    <Tag  rounded='lg' {...props}></Tag>
    <Tag  rounded='top' {...props}></Tag>
    <Tag  rounded='left' {...props}></Tag>
</Tag>
```

### Order

Experimental


```js

var style = {width:'4em', height:'4em'};
var props = {margin:{top:1, bottom:1, right:1, left:1}, display:'inline-block', bg:'info', border:'dark', style:style};

<Tag >
    <Tag  order={{sm:0, lg:0}}  {...props}></Tag>
    <Tag  order='sm-0 lg-0'  {...props}></Tag>
</Tag>
```
