import { Col, Container, Row } from '@nilfoundation/react-components';
import { useRef } from 'react';
import { useScrumble } from '../../hooks/useScrumble';
import scamblePhrases from './scamblePhrases';
import styles from './Banner.module.scss';

/**
 * Banner component.
 *
 * @returns React component.
 */
const Banner = (): JSX.Element => {
    const scrambleRef = useRef<HTMLDivElement>(null);
    useScrumble(scrambleRef, { phrases: scamblePhrases });

    return (
        <Container
            role="banner"
            className={styles.banner}
        >
            <Row>
                <Col xs={12}>
                    <h1>
                        <code>=nil;</code>Foundation
                    </h1>
                    <h2>
                        We support projects in:
                        <span
                            ref={scrambleRef}
                            className={styles.scramble}
                        />
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;
