<template>
  <router-view/>
</template>

<script>
import { wallet, CONTRACT_ID } from "@/services/near";

export default {
  setup() {
    const accountId = wallet.getAccountId();
    return {
      accountId,
      signIn: () => wallet.requestSignIn(CONTRACT_ID),
      signOut: () => {
        wallet.signOut();
        window.location.reload();
      },
    };
  },
};
</script>
