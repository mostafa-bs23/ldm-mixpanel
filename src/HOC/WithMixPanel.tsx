import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const withMixpanel = (WrappedComponent: any) => {
  const MixpanelWrapper = (props: any) => {

    useEffect(() => {
      mixpanel.init('05f2d82b5be065eb0928aef5a24f68ee', {debug: true});

      mixpanel.identify('123');

      mixpanel.people.set({
        $name: 'John',
        $email: 'john@example.com',
        'Company': 'BS23',
        'Upgrade date': new Date()
    });
    }, []);

    return <WrappedComponent mixpanel={mixpanel} {...props} />;
  };

  return MixpanelWrapper;
};

export default withMixpanel;
