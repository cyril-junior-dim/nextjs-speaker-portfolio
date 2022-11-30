import React from 'react';
import Link from 'next/link';
import { LocationContext } from '../../security/helpers';

const SecureLink = React.forwardRef((props, ref) => {
    const { registerLocation } = React.useContext(LocationContext);
    return (
        <Link onClick={() => registerLocation(props.to)} ref={ref} {...props} />
    );
});

SecureLink.displayName = 'SecureLink';

export default SecureLink;