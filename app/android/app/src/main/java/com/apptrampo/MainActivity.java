package com.apptrampo;

import com.facebook.react.ReactActivity;
import br.com.vizir.rn.paypal.PayPalPackage; // <--
import br.com.vizir.rn.paypal.PayPal; // <--
import android.content.Intent; // <--

public class MainActivity extends ReactActivity implements DefaultHardwareBackBtnHandler{


    private static final int PAY_PAL_REQUEST_ID = 9; // <-- Can be any unique number
    private PayPalPackage payPalPackage; // <--

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // ...
        payPalPackage = new PayPalPackage(this, PAY_PAL_REQUEST_ID); // <--

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                // ...
                .addPackage(payPalPackage) // <--
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        // ...
    }


    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
       super.onActivityResult(requestCode, resultCode, data);
       if (requestCode == PAY_PAL_REQUEST_ID) {
           payPalPackage.handleActivityResult(requestCode, resultCode, data); // <--
       } else {
           otherModulesHandlers(requestCode, resultCode, data);
       }
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AppTrampo";
    }
}
