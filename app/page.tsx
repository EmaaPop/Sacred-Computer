import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

// NOTE(jimmylee): This is a kitchen sink of all components.
// When forking or remixing, you'll likely only need a few.
import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import AS400 from '@components/examples/AS400';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import Chessboard from '@components/Chessboard';
import CodeBlock from '@components/CodeBlock';
import ContentFluid from '@components/ContentFluid';
import ComboBox from '@components/ComboBox';
import DataTable from '@components/DataTable';
import DatePicker from '@components/DatePicker';
import DashboardRadar from '@components/examples/DashboardRadar';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Denabase from '@components/examples/Denabase';
import Dialog from '@components/Dialog';
import Divider from '@components/Divider';
import Drawer from '@components/Drawer';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Grid from '@components/Grid';
import HoverComponentTrigger from '@components/HoverComponentTrigger';
import Indent from '@components/Indent';
import Input from '@components/Input';
import IntDevLogo from '@components/svg/IntDevLogo';
import ListItem from '@components/ListItem';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import MessagesInterface from '@components/examples/MessagesInterface';
import ModalAlert from '@components/modals/ModalAlert';
import ModalCanvasSnake from '@components/modals/ModalCanvasSnake';
import ModalCanvasPlatformer from '@components/modals/ModalCanvasPlatformer';
import ModalChess from '@components/modals/ModalChess';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalError from '@components/modals/ModalError';
import ModalMatrixModes from '@components/modals/ModalMatrixModes';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import Navigation from '@components/Navigation';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Script from 'next/script';
import Select from '@components/Select';
import SidebarLayout from '@components/SidebarLayout';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import TableColumn from '@components/TableColumn';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import TreeView from '@components/TreeView';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';
import ModalDOMSnake from '@root/components/modals/ModalDOMSnake';

export { metadata } from './metadata';
export const dynamic = 'force-static';

export default function Page() {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <br />
      <Grid>
        <Row>
          {Package.name.toUpperCase()} <Badge>{Package.version}</Badge>
        </Row>
        <Row>{Package.description}</Row>
      </Grid>

      <DebugGrid />
      <DefaultActionBar />

      <Grid>
        <ActionListItem icon={`⭢`} href="https://internet.dev" target="_blank">
          Hire our studio to build your applications
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://github.com/internet-development/www-sacred" target="_blank">
          View the SRCL source code
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://vercel.com/home" target="_blank">
          Try our hosting provider Vercel
        </ActionListItem>
      </Grid>
      <Grid>

      <Accordion defaultValue={true} title="INPUT">
          An input field is a fundamental UI component that allows users to enter and edit text, numerical data, or files. It is commonly used in forms, search bars, file uploads, and other interfaces requiring user input.
          <br />
          {/* <br />
          <Card title="TEXT INPUT EXAMPLES">
            <Input label="MULTIPLE INPUTS" autoComplete="off" isBlink={false} name="input_test_empty" />
            <Input autoComplete="off" isBlink={false} name="input_test_empty" />
            <Input autoComplete="off" isBlink={false} name="input_test_empty" />
            <Input autoComplete="off" isBlink={false} label="EMPTY CASE" name="input_test_one" />
            <Input autoComplete="off" isBlink={false} placeholder="All the world is a stage" label="PLACEHOLDER" name="input_test_two" />
            <Input autoComplete="off" isBlink={false} label="PASSWORD" type="password" name="input_test_password" />
            <Input autoComplete="off" isBlink={true} label="CARET BLINK" name="input_test_blink" />
            <Input autoComplete="off" caretChars="(✿﹏●)" isBlink={true} label="CUSTOM CARET TEXT" name="input_test_caret" />
            <Input autoComplete="off" caretChars="⌫ ERROR" isBlink={false} label="CUSTOM CARET TEXT" name="input_test_single_caret" />
            <Input autoComplete="off" caretChars={<BlockLoader mode={6} />} isBlink={false} label="CUSTOM CARET LOADER" name="input_test_single_caret" />
          </Card> */}
          <br />
          <CardDouble title="">
            <Input 
              label="IMAGE UPLOAD" 
              type="file" 
              accept="image/*"
              name="input_test_image_single"
              autoComplete="off"
              isBlink={false}
            />
            <br />
            <Button>Analyse</Button> 
            <br />
            {/* <br /> */}
            {/* <BarLoader intervalRate={100} /> */}
            <br />
          </CardDouble>
          <br />

        </Accordion>

        <Accordion defaultValue={true} title="ANALYSIS">
          This is a hierarchical list structure that allow users to navigate nested information or functionalities within the image metadata.
          <br />
          <br />
          <Card title="Image Metadata">
            <TreeView defaultValue={true} isRoot title="Root" style={{ minWidth: '71ch' }}>
              <TreeView defaultValue={true} title="1. Overview">
                <TreeView title="File Name: CV pic edited copy.jpg" isFile />
                <TreeView title="File Type: image/jpeg" isFile />
                <TreeView title="File Size: 1.13 MB" isFile />
                <TreeView title="Dimensions: 1899 × 2848" isFile />
                <TreeView title="Author: Jane Smith" isFile />
                <TreeView title="Created Date: 2023-05-15" isFile />
                <TreeView title="Location: Paris, France" isFile />
                <TreeView title="Copyright: © 2023 Jane Smith Photography" isFile />
              </TreeView>

              <TreeView defaultValue={true} title="2. Materials">
                <TreeView title="Medium: Digital Photography" isFile />
                <TreeView title="Support: Digital" isFile />
                <TreeView title="Techniques: HDR, Color Correction" isFile />
                <TreeView title="Colors: RGB Color Space" isFile />
              </TreeView>

              <TreeView defaultValue={true} title="3. History">
                <TreeView defaultValue={true} title="Color Correction - 2023-05-16">
                  <TreeView title="Adjusted white balance and enhanced color saturation" isFile />
                  <TreeView title="Software: Adobe Lightroom" isFile />
                </TreeView>
                <TreeView defaultValue={true} title="Cropping - 2023-05-16">
                  <TreeView title="Cropped to improve composition and focus on main subject" isFile />
                  <TreeView title="Software: Adobe Photoshop" isFile />
                </TreeView>
                <TreeView defaultValue={true} title="Noise Reduction - 2023-05-17">
                  <TreeView title="Applied noise reduction to improve image quality in low-light areas" isFile />
                  <TreeView title="Software: Adobe Photoshop" isFile />
                </TreeView>
              </TreeView>

              <TreeView defaultValue={true} title="4. Sharing">
                <TreeView defaultValue={true} title="Instagram - 2023-05-20">
                  <TreeView title="Posted as part of #ArchitectureWeek series" isFile />
                  <TreeView title="View original post" isFile />
                </TreeView>
                <TreeView defaultValue={true} title="Flickr - 2023-05-21">
                  <TreeView title="Added to 'European Architecture' collection" isFile />
                  <TreeView title="View original post" isFile />
                </TreeView>
              </TreeView>
            </TreeView>
          </Card>
          <br />
        </Accordion>
        <ActionButton hotkey="⌘+S">Save</ActionButton>
            <br />
      </Grid>


      <Grid>
        <ActionListItem icon={`⭢`} href="https://internet.dev" target="_blank">
          Hire our studio to build your applications
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://github.com/internet-development/www-sacred" target="_blank">
          View the SRCL source code
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://vercel.com/home" target="_blank">
          Try our hosting provider Vercel
        </ActionListItem>
      </Grid>
      <ModalStack />
    </DefaultLayout>
  );
}
