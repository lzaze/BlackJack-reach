
import random
from threading import Thread
from reach_rpc import mk_rpc


def main():
    rpc, rpc_callbacks = mk_rpc()

    starting_balance = rpc('/stdlib/parseCurrency', 100)
    acc_alice = rpc('/stdlib/newTestAccount', starting_balance)
    acc_bob = rpc('/stdlib/newTestAccount', starting_balance)

    def fmt(x):
        return rpc('/stdlib/formatCurrency', x, 4)

    def get_balance(w):
        return fmt(rpc('/stdlib/balanceOf', w))

    before_alice = get_balance(acc_alice)
    before_bob   = get_balance(acc_bob)
    
    ctc_alice    = rpc('/acc/contract', acc_alice)
    