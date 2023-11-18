"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";

export default function WhitePaperModal() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <>
      <span onClick={onOpen}>White Paper</span>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-transparent" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-pink-100/10 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all"
                  style={{ fontFamily: "Virgil" }}
                >
                  <Dialog.Title
                    as="h2"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    Frothcoin (PM): The social practice of the tulip bubble
                  </Dialog.Title>
                  <div className=" w-full overflow-auto max-h-[80vh] text-black">
                    <h3 className="mt-2">Summary</h3>
                    <p>
                      Frothcoin (token symbol: PM) is a pure memecoin that aims
                      to mock the lack of value in the currency circle and is
                      inspired by the tulip bubble. This social practice token
                      will take us back to history and, in a mocking way, cause
                      people to reflect on investment decisions and market
                      mania.
                    </p>
                    <h3 className="mt-2">1. Background</h3>
                    <p>
                      The Tulip Bubble was an economic frenzy in the mid-17th
                      century in which people invested wildly in one or two
                      elegant tulips, eventually causing the market to collapse.
                      Frothcoin draws on this history to question the excesses
                      of today’s cryptocurrency community in a light-hearted and
                      humorous way.
                    </p>
                    <h3 className="mt-2">2. Frothcoin features</h3>
                    <p>
                      - Total supply: 21 million coins A nod to Bitcoin’s total
                      supply cap.{" "}
                    </p>
                    <p>
                      - Contract address:
                      0xa780ec18b48f43c884694aab9c8411e7203234aa{" "}
                    </p>
                    <p>
                      - Token symbol: PM - Full name of the token: Frothcoin{" "}
                    </p>
                    <p>- Token alias: bubble coin </p>
                    <p>- Fully transparent and verifiable</p>
                    <h3 className="mt-2">3. Social practice and ridicule</h3>
                    <p>
                      Through satire and ridicule, Frothcoin calls on investors
                      to treat the market with caution and not to fall into
                      blind fanaticism. We believe that reflecting on history
                      and learning from it is part of investing wisely.
                    </p>
                    <h3 className="mt-2">4. Community building</h3>
                    <p>
                      The Frothcoin community encourages open dialogue and
                      shares interesting memes to promote understanding of the
                      bubble economy. We believe that understanding financial
                      mania can be better enlightened through light-hearted
                      discussions and a fun approach.
                    </p>
                    <h3 className="mt-2">5. Risks and Disclaimers</h3>
                    <p>
                      PM is a mocking token and has no actual investment value.
                      Investors who buy PM (Frothcoin) need to understand that
                      this is a social practice and not a real investment tool.
                      Investments need to be prudent. This project is not
                      responsible for the losses that investors may face.
                    </p>
                    <p className="mt-2">
                      PM, through mockery, hopes to arouse caution against
                      excessive speculation and market mania. We invite you to
                      participate in this social practice, re-examine the
                      currency circle phenomenon in a humorous way, and help
                      build a more rational and transparent financial ecosystem.
                    </p>{" "}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
