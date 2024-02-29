import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoFlagOutline } from 'react-icons/io5';

export const FromTo = ({ from, to }) => (
  <div className="flex  flex-col justify-start">
    <span>
      <CiLocationOn className="inline mr-1" />
      Desde <span className="font-extralight">{from}</span>
    </span>
    <span>
      <IoFlagOutline className="inline mr-1" />
      Hasta <span className="font-extralight">{to}</span>
    </span>
  </div>
);


