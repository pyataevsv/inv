import React from 'react';
import styles from '../../../global.scss';
import { Checkbox } from '../../common/Checkbox';
import { Container } from '../../common/Container';
import { Input } from '../../common/Input';
import { Select } from '../../common/Select';
import { Badge } from '../../common/Badge';
import { Button, ButtonType } from '../../common/Button';
import { Icon } from '../../common/Icon';
import { Link } from '../../common/Link';
import { NavIcon } from '../../common/NavIcon';
import { Banner } from '../../vigets/Banner';

export const Book = () => {
  const options = [
    { name: 'Option', value: 1 },
    { name: 'Option', value: 1 },
    { name: 'Option', value: 1 },
    { name: 'Option', value: 1 },
    { name: 'Option', value: 1 },
  ];

  return (
    <>
      <Container>
        <Banner />
      </Container>

      <Container>
        <b>Bold</b>
        <h1>H1 header</h1>
        <h2>H2 header</h2>
        <h3>H3 header</h3>
      </Container>
      <Container>
        <Checkbox labelTxt="Checkbox" id="checkbox" />
      </Container>
      <Container>
        <Input placeholder="Name" />
        <Input placeholder="City" error label="City" />
        <Input placeholder="ZipCode" errorLabel="No value added" />
        <Input placeholder="ZipCode" success />
      </Container>
      <Container style={{ width: 200 }}>
        <h1>Последние трейды</h1>
        <Select
          options={options}
          primalOption={options[0]}
          onChange={(item) => console.log(item)}
        />
      </Container>
      <Container>
        <Button type={ButtonType.largefilled}>Восстановить пароль</Button>
      </Container>

      <Container>
        <Button type="large" fill="outline">
          Восстановить пароль
        </Button>
      </Container>

      <Container>
        <Button type="medium" fill="outline">
          В портфель
        </Button>
        <Button type="medium" fill="filled">
          В портфель
        </Button>
      </Container>

      <Container>
        <Button type="small" fill="outline">
          USD
        </Button>
        <Button type="small" fill="filled">
          ETH
        </Button>
      </Container>

      <Container>
        <Link active>День</Link>

        <Link>Неделя</Link>

        <Link>Месяц</Link>
      </Container>
      <Container>
        <Badge color="red">Long</Badge>
        <Badge color="green">Short</Badge>
        <Badge color="blue">Криптовалюта</Badge>
      </Container>
      <Container>
        <Icon type={'portfolio'} />
        <Icon type={'diff'} />
      </Container>
      <Container>
        <NavIcon type={'dashboard'} active />
        <NavIcon type={'strategy'} />
        <NavIcon type="portfolio" />
        <NavIcon type="profile" />
      </Container>
    </>
  );
};
